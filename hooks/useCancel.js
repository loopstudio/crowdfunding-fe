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

export const useCancel = (id, isOwner, setIsModalOpen) => {
  const { abi } = crowdfundingConfig;

  const router = useRouter();

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi,
    functionName: FUNCTIONS.cancel,
    args: [id],
    enabled: isOwner,
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess() {
      setIsModalOpen(false);
      router.push(ROUTES.home);
      toast(
        <ToastContent
          title="Project deleted successfully"
          description="Your project had been deleted successfully."
        />,
        TOAST_SUCCESS_CONFIG
      );
    },
  });

  useContractEvent({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_CF,
    abi,
    eventName: EVENTS.cancel,
    listener(campaignId, owner, amount) {
      console.log("CANCEL:", campaignId, owner, amount);
    },
  });

  return { write };
};
