import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Button, ProgressBar } from "../../components";
import { getFormattedDate } from "../../utils/date";
import { getProgressPercentage } from "../../utils/percentage";
import { CAMPAIGNS } from "../../constants/queries";
import { Card, Container, Text } from "./projects.styles";

const ProjectsList = () => {
  const { data: campaigns, isLoading } = useQuery({
    queryKey: [CAMPAIGNS],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns?page=0&size=20`
        );
        return res.data.data;
      } catch (error) {
        console.log(`Error querying campaigns: ${error}`);
      }
    },
  });

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        campaigns?.map((campaign) => (
          <Card key={campaign._id}>
            <h2>{campaign.title}</h2>
            <Text>Expiration date: {getFormattedDate(campaign.endDate)}</Text>
            <Text>Goal: ${campaign.goal[0].amount}</Text>
            <ProgressBar
              percentage={getProgressPercentage(
                campaign.currentAmount[0].amount,
                campaign.goal[0].amount
              )}
            />
            <Button>Pledge</Button>
          </Card>
        ))
      )}
    </Container>
  );
};

export default ProjectsList;
