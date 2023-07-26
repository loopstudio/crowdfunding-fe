import {
  useContractEvent,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { FUNCTIONS, EVENTS, ROUTES } from "../constants";
import { ToastContent } from "components";
import { TOAST_SUCCESS_CONFIG } from "utils/toast";
import crowdfundingConfig from "../crowdfunding.config.json";

export const useClaim = (id, isOwner) => {
  const { abi } = crowdfundingConfig;

  const router = useRouter();

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi,
    functionName: FUNCTIONS.claim,
    args: [id],
    enabled: isOwner,
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess() {
      router.push(ROUTES.home);
      toast(
        <ToastContent
          title="Successful claim"
          description="Your claim was processed successfully"
        />,
        TOAST_SUCCESS_CONFIG
      );
    },
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
