import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { CAMPAIGNS } from "../../constants/queries";
import {
  Container,
  DescriptionBox,
  ImageBanner,
  ImageContainer,
  LeftContent,
  RightContent,
  Text,
  Title,
} from "./pledge.styles";
import { Button, ProgressBar } from "../../components";
import { getProgressPercentage } from "../../utils/percentage";
import axios from "axios";

const PledgePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: campaign, isLoading } = useQuery({
    queryKey: [CAMPAIGNS],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaign/${id}`
        );
        return res.data.data;
      } catch (error) {
        console.log(`Error querying campaign ${id}: ${error}`);
      }
    },
  });

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

            <Button> Pledge Now</Button>
          </RightContent>
        </Container>
      )}
    </div>
  );
};

export default PledgePage;
