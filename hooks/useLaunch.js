import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractEvent,
} from "wagmi";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { ToastContent } from "components";
import { TOAST_SUCCESS_CONFIG } from "utils/toast";
import { useDebounce } from "./useDebounce";
import { FUNCTIONS, EVENTS } from "../constants";
import crowdfundingConfig from "../crowdfunding.config.json";

export const useLaunch = (fundGoal, formData, postData) => {
  const { abi } = crowdfundingConfig;
  const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF;

  const { startDate, endDate } = formData;

  const router = useRouter();

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
    functionName: FUNCTIONS.launch,
    args: [
      Number(debouncedFundGoal),
      debouncedStartDate?.toString(),
      debouncedEndDate?.toString(),
    ],
    enabled: isEnabled,
  });

  const { data, write } = useContractWrite({
    ...config,
    onSuccess() {
      postData(formData, router);
      toast(
        <ToastContent
          title="Project posted"
          description="Your project has been posted successfully"
        />,
        TOAST_SUCCESS_CONFIG
      );
    },
  });

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  useContractEvent({
    address,
    abi,
    eventName: EVENTS.launch,
    listener(id, goal, creator, startDate, endDate) {
      console.log("LAUNCH:", id, goal, creator, startDate, endDate);
    },
  });

  return { write, isLoading };
};
