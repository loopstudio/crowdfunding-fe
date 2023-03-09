import ReactModal from "react-modal";
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
  Button,
  Input,
  Header,
  ProjectSideBar,
  PledgeSideBar,
} from "components";
import { fetchCampaign } from "utils/fetch";

import {
  Container,
  DescriptionTag,
  ButtonsContainer,
  Title,
  DescriptionContainer,
  Wrapper,
} from "./pledge.styles";

const validationSchema = object().shape({
  [PLEDGE_AMOUNT]: number().positive().min(1).required(),
});

const PledgePage = () => {
  const { address } = useAccount();
  const router = useRouter();
  const { id } = router.query;
  const [isPledge, setIsPledge] = useState(false);
  const queryClient = useQueryClient();

  const {
    formState: { errors, isValid, isDirty },
    handleSubmit,
    register,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      [PLEDGE_AMOUNT]: 0,
    },
    mode: "onChange",
  });

  const { onSubmit, isTransactionComplete } = usePledge(
    id,
    getValues(PLEDGE_AMOUNT)
  );

  const { write } = useClaim(id);

  const { data: campaign, isLoading } = useQuery([QUERIES.campaign, id], () =>
    fetchCampaign(id)
  );

  useEffect(() => {
    if (isTransactionComplete) {
      queryClient.refetchQueries([QUERIES.campaign, id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTransactionComplete]);

  const isOwner = address === campaign?.owner?.publicAddress;

  if (isLoading || !campaign) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>{campaign?.title}</Title>

          <DescriptionTag>Description</DescriptionTag>

          <DescriptionContainer>
            <p>{campaign?.story}</p>
          </DescriptionContainer>
        </Wrapper>

        {isPledge ? (
          <PledgeSideBar
            onClick={write}
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

      <ReactModal
        shouldCloseOnEsc
        style={{
          content: {
            height: "200px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            width: "250px",
            margin: "0 auto",
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register(PLEDGE_AMOUNT)}
            label="Amount"
            name={PLEDGE_AMOUNT}
            type="number"
            error={errors[PLEDGE_AMOUNT]}
          />
          <ButtonsContainer>
            <Button>Cancel</Button>
            <Button disabled={!isDirty || !isValid}>Pledge</Button>
          </ButtonsContainer>
        </form>
      </ReactModal>
    </>
  );
};

export default PledgePage;
