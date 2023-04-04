import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, number } from "yup";

import { QUERIES, PLEDGE_AMOUNT } from "../../constants";
import { usePledge } from "hooks/usePledge";
import { useClaim } from "hooks/useClaim";
import {
  Header,
  ProjectSideBar,
  PledgeSideBar,
  ProjectDetailSkeleton,
} from "components";
import { fetchCampaign } from "utils/fetch";

import {
  Container,
  DescriptionTag,
  Title,
  DescriptionContainer,
  Wrapper,
} from "./project.styles";

const validationSchema = object().shape({
  [PLEDGE_AMOUNT]: number().positive().min(1).required(),
});

const ProjectPage = () => {
  const { address } = useAccount();
  const router = useRouter();
  const { id } = router.query;
  const [isPledge, setIsPledge] = useState(false);
  const queryClient = useQueryClient();

  const { handleSubmit, register, watch } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      [PLEDGE_AMOUNT]: 0,
    },
    mode: "onChange",
  });

  const { data: campaign, isLoading } = useQuery([QUERIES.campaign, id], () =>
    fetchCampaign(id)
  );

  const { onSubmit, isTransactionComplete } = usePledge(
    id,
    watch(PLEDGE_AMOUNT)
  );

  const isOwner = address === campaign?.campaign?.owner?.publicAddress;

  const { write } = useClaim(id, isOwner);

  useEffect(() => {
    if (isTransactionComplete) {
      queryClient.refetchQueries([QUERIES.campaign, id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTransactionComplete]);

  if (isLoading || !campaign) return <ProjectDetailSkeleton />;

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>{campaign?.campaign.title}</Title>

          <DescriptionTag>Description</DescriptionTag>

          <DescriptionContainer>
            <p>{campaign?.campaign.story}</p>
          </DescriptionContainer>
        </Wrapper>

        {isPledge ? (
          <PledgeSideBar
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        ) : (
          <ProjectSideBar
            campaign={campaign}
            onClick={write}
            isOwner={isOwner}
            setIsPledge={setIsPledge}
          />
        )}
      </Container>
    </>
  );
};

export default ProjectPage;
