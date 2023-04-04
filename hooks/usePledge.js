import {
  useContractEvent,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import BigNumber from "bignumber.js";

import { FUNCTIONS, EVENTS } from "./../constants";
import { useDebounce } from "./useDebounce";

import loopTokenConfig from "../loopToken.config.json";
import crowdfundingConfig from "../crowdfunding.config.json";

export const usePledge = (id, pledgeAmount) => {
  const { abi } = loopTokenConfig;
  const { abi: cfAbi } = crowdfundingConfig;

  const parseValue = (value) => {
    const decimal = new BigNumber(10).pow(18);
    const wei = new BigNumber(value);

    return wei.multipliedBy(decimal);
  };

  const debouncedPledgeAmount = useDebounce(parseValue(pledgeAmount), 500);

  const isEnabled = !!debouncedPledgeAmount;

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_LT,
    abi,
    functionName: FUNCTIONS.approve,
    args: [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF, debouncedPledgeAmount],
    enabled: isEnabled,
  });

  const { write, isSuccess } = useContractWrite({
    ...config,
    onSuccess() {
      cfWrite?.();
    },
  });

  const { config: cfConfig } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi: cfAbi,
    functionName: FUNCTIONS.pledge,
    args: [id, debouncedPledgeAmount],
    enabled: isSuccess,
  });

  const { data, write: cfWrite } = useContractWrite({
    ...cfConfig,
  });

  const onSubmit = () => {
    write?.();
  };

  useContractEvent({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_LT,
    abi,
    eventName: EVENTS.approval,
    listener(owner, spender, value) {
      console.log("APPROVAL:", owner, spender, value);
    },
  });

  useContractEvent({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi: cfAbi,
    eventName: EVENTS.pledge,
    listener(id, pledger, amount) {
      console.log("PLEDGE:", id, pledger, amount);
    },
  });

  const { data: isTransactionComplete } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { onSubmit, isTransactionComplete };
};
