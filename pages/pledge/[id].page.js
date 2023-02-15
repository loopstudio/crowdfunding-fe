import axios from "axios";
import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, number } from "yup";

import { ACCESS_TOKEN, PLEDGE_AMOUNT } from "../../constants";
import { usePledge } from "hooks/usePledge";
import { Button, ProgressBar, Input } from "components";
import { getProgressPercentage } from "utils/percentage";

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
  const [campaign, setCampaign] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
    const fetchCampaign = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns/${id}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem(ACCESS_TOKEN)}`,
            },
          }
        );
        setCampaign(res.data.data);
      } catch (error) {
        console.log(`Error querying campaign ${id}: ${error}`);
      }
      setIsLoading(false);
    };

    fetchCampaign();
  }, [id]);

  useEffect(() => {
    if (isTransactionComplete) setIsModalOpen(false);
  }, [isTransactionComplete]);

  return (
    <div>
      <h1>Pledge Page</h1>
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
            <Text>Pledged: </Text>

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
    </div>
  );
};

export default PledgePage;
