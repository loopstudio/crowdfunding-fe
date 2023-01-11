import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

import { Button, ProgressBar } from "../../components";
import { getFormattedDate } from "../../utils/date";
import { getProgressPercentage } from "../../utils/percentage";
import { QUERIES } from "../../constants";
import loopTokenConfig from "../../loopToken.config.json";
import crowdfundingConfig from "../../crowdfunding.config.json";
import { Card, Container, Text } from "./projects.styles";

const ProjectsList = () => {
  const { abi } = loopTokenConfig;
  const { abi: cfAbi } = crowdfundingConfig;
  const { data: campaigns, isLoading } = useQuery({
    queryKey: [QUERIES.campaigns],
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

  const { config } = usePrepareContractWrite({
    address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi,
    functionName: "approve",
    args: [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, 2021],
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess() {
      cfWrite?.();
    },
  });

  useEffect(() => {}, []);

  const { config: cfConfig } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    abi: cfAbi,
    functionName: "pledge",
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
