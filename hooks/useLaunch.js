import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractEvent,
} from "wagmi";

import { useDebounce } from "./useDebounce";
import crowdfundingConfig from "../crowdfunding.config.json";
import { LAUNCH } from "../constants";

export const useLaunch = (startDate, endDate, fundGoal, formData, postData) => {
  const { abi } = crowdfundingConfig;
  const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF;

  const debouncedStartDate = useDebounce(
    Math.floor(new Date(startDate).getTime() / 1000),
    500
  );
  const debouncedEndDate = useDebounce(
    Math.floor(new Date(endDate).getTime() / 1000),
    500
  );
  const debouncedFundGoal = useDebounce(fundGoal, 500);

  const isEnabled =
    !!debouncedFundGoal && !!debouncedStartDate && !!debouncedEndDate;

  const { config } = usePrepareContractWrite({
    address,
    abi,
    functionName: LAUNCH,
    args: [
      debouncedFundGoal,
      debouncedStartDate?.toString(),
      debouncedEndDate?.toString(),
    ],
    enabled: isEnabled,
  });

  const { data, write } = useContractWrite({
    ...config,
    onSuccess() {
      console.log(LAUNCH);
      postData(formData);
    },
  });

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  useContractEvent({
    address,
    abi,
    eventName: "Launch",
    listener(id, goal, creator, startDate, endDate) {
      console.log(id, goal, creator, startDate, endDate);
    },
  });

  return { write, isLoading };
};
