import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi";

import { useDebounce } from "./useDebounce";
import crowdfundingConfig from "../crowdfunding.config.json";
import { LAUNCH } from "../constants";

export const useLaunch = (startDate, endDate, fundGoal, formData, postData) => {
    const { abi } = crowdfundingConfig;
    const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

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

    console.log(debouncedEndDate.toString(), debouncedStartDate);

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

    return { write, isLoading };
};