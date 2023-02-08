import axios from "axios";
import { useEffect, useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

import { ACCESS_TOKEN, PLEDGE, APPROVE } from "../../constants";
import { Button, ProgressBar } from "../../components";
import { getFormattedDate } from "../../utils/date";
import { getProgressPercentage } from "../../utils/percentage";
import loopTokenConfig from "../../loopToken.config.json";
import crowdfundingConfig from "../../crowdfunding.config.json";
import { Card, Container, Text } from "./projects.styles";

const ProjectsList = () => {
  const { abi } = loopTokenConfig;
  const { abi: cfAbi } = crowdfundingConfig;
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { config } = usePrepareContractWrite({
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi,
    functionName: APPROVE,
    args: [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_LT, 2021],
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess() {
      cfWrite?.();
    },
  });

  useEffect(() => {}, []);

  const { config: cfConfig } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi: cfAbi,
    functionName: PLEDGE,
    args: ["0x1", 123],
  });

  const { write: cfWrite } = useContractWrite({
    ...cfConfig,
    onSuccess() {
      console.log("success");
    },
  });

  const handleClick = () => {
    write?.();
  };

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
            <Button onClick={handleClick}>Pledge</Button>
          </Card>
        ))
      )}
    </Container>
  );
};

export default ProjectsList;
