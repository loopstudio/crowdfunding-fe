import { useContractWrite, usePrepareContractWrite } from "wagmi";

import { PLEDGE, APPROVE } from "./../constants";
import { useDebounce } from "./useDebounce";

import loopTokenConfig from "../loopToken.config.json";
import crowdfundingConfig from "../crowdfunding.config.json";

export const usePledge = (id, pledgeAmount) => {
  const { abi } = loopTokenConfig;
  const { abi: cfAbi } = crowdfundingConfig;

  const debouncedPledgeAmount = useDebounce(pledgeAmount, 500);

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_LT,
    abi,
    functionName: APPROVE,
    args: [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_LT, debouncedPledgeAmount],
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess(data) {
      console.log("Success", data);
      cfWrite?.();
    },
  });

  const { config: cfConfig } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi: cfAbi,
    functionName: PLEDGE,
    args: [id, debouncedPledgeAmount],
  });

  const { write: cfWrite } = useContractWrite({
    ...cfConfig,
  });

  const onSubmit = () => {
    write?.();
  };

  return { onSubmit };
};
