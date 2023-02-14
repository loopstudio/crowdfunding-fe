import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, date, number, ref } from "yup";
import {
  TITLE,
  SUBTITLE,
  STORY,
  TOKEN,
  FUND_GOAL,
  START_DATE,
  END_DATE,
} from "constants";

const validationSchema = object().shape({
  [TITLE]: string().required(),
  [SUBTITLE]: string().required(),
  [STORY]: string().required(),
  [TOKEN]: string().required(),
  [FUND_GOAL]: number().required(),
  [START_DATE]: date()
    .required()
    .min(new Date(), "Date should be greater than now"),
  [END_DATE]: date()
    .required()
    .min(ref("startDate"), "End date should be after start date"),
});

export const useCreateForm = () => {
  const {
    formState: { errors, isValid, isSubmitSuccessful },
    handleSubmit,
    register,
    setValue,
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {},
    mode: "onChange",
  });

  const handleTokenSelect = (event) => {
    setValue(TOKEN, event.target.value, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleDate = (field, date) => {
    setValue(field, date, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return {
    errors,
    getValues,
    handleDate,
    handleTokenSelect,
    handleSubmit,
    isValid,
    register,
  };
};
