import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, number } from "yup";

import { QUERIES, PLEDGE_AMOUNT } from "../../constants";
import { usePledge } from "hooks/usePledge";
import { Button, ProgressBar, Input, Header } from "components";
import { getProgressPercentage } from "utils/percentage";
import { fetchCampaign } from "utils/fetch";

import {
  Container,
  DescriptionBox,
  ImageBanner,
  ImageContainer,
  LeftContent,
  RightContent,
  Text,
  Title,
  ButtonsContainer,
} from "./pledge.styles";

const validationSchema = object().shape({
  [PLEDGE_AMOUNT]: number().positive().min(1).required(),
});

const PledgePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const { data: campaign, isLoading } = useQuery([QUERIES.campaign, id], () =>
    fetchCampaign(id)
  );

  useEffect(() => {
    if (isTransactionComplete) {
      setIsModalOpen(false);
      queryClient.refetchQueries([QUERIES.campaign, id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTransactionComplete]);

  return (
    <>
      <Header />
      {isLoading || !campaign ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <LeftContent>
            <ImageContainer>
              <ImageBanner src={campaign.image} />
            </ImageContainer>
            <Title>{campaign.title}</Title>

            <DescriptionBox>
              <Text>{campaign.subtitle}</Text>
              <Text>{campaign.story}</Text>
            </DescriptionBox>
          </LeftContent>
          <RightContent>
            <Title>Goal</Title>
            <ProgressBar
              percentage={getProgressPercentage(
                campaign.currentAmount[0].amount,
                campaign.goal[0].amount
              )}
            />
            <Text>Weekly Report</Text>
            <Text>Revenue: ${campaign.fiatAmount}</Text>
            <Text>Pledged: ${campaign.currentAmount[0].amount}</Text>

            <Button onClick={() => setIsModalOpen((prev) => !prev)}>
              Pledge Now
            </Button>
          </RightContent>
        </Container>
      )}

      <ReactModal
        isOpen={isModalOpen}
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
            <Button onClick={() => setIsModalOpen((prev) => !prev)}>
              Cancel
            </Button>
            <Button disabled={!isDirty || !isValid}>Pledge</Button>
          </ButtonsContainer>
        </form>
      </ReactModal>
    </>
  );
};

export default PledgePage;
