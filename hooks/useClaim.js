import {
  useContractEvent,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

import { FUNCTIONS, EVENTS } from "../constants";
import crowdfundingConfig from "../crowdfunding.config.json";

export const useClaim = (id) => {
  const { abi } = crowdfundingConfig;

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi,
    functionName: FUNCTIONS.claim,
    args: [id],
  });

  const { write } = useContractWrite({
    ...config,
  });

  useContractEvent({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi,
    eventName: EVENTS.claim,
    listener(campaignId, owner, amount) {
      console.log("CLAIM:", campaignId, owner, amount);
    },
  });

  return { write };
};
