import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ACCESS_TOKEN } from "../../constants";
import { ProgressBar, Button } from "components";
import { getFormattedDate } from "utils/date";
import { getProgressPercentage } from "utils/percentage";

import { Card, Container, Text } from "./projects.styles";

const ProjectsList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCampaigns = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns?page=0&size=20`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem(ACCESS_TOKEN)}`,
          },
        }
      );
      setCampaigns(data);
    } catch (error) {
      console.log(`Error querying campaigns: ${error}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCampaigns();
  }, []);

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
            <Link href={`/pledge/${campaign.onchainId}`}>
              <Button>Pledge</Button>
            </Link>
          </Card>
        ))
      )}
    </Container>
  );
};

export default ProjectsList;
