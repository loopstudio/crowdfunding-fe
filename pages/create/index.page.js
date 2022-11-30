import { useForm } from "react-hook-form";
import { number, object, string, date, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import useDebounce from "../../hooks/useDebounce";

import Select from "../../components/select/select";
import crowdfundingConfig from "../../crowdfunding.config.json";

import { Container, Form, Title } from "./create.styles";

const validationSchema = object().shape({
  title: string().required(),
  subtitle: string().required(),
  story: string().required(),
  token: string().required(),
  fundGoal: number().required(),
  startDate: date()
    .required()
    .min(new Date(), "Date should be greater than now"),
  endDate: date()
    .required()
    .min(ref("startDate"), "End date should be after start date"),
});

const Create = () => {
  const { abi, address } = crowdfundingConfig;

  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {},
    mode: "onChange",
  };
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useForm(formOptions);
  const debouncedStartDate = useDebounce(
    new Date(getValues("startDate")).getTime(),
    500
  );
  const debouncedEndDate = useDebounce(
    new Date(getValues("endDate")).getTime(),
    500
  );
  const debouncedFundGoal = useDebounce(getValues("fundGoal"), 500);

  const isEnabled =
    !!debouncedFundGoal && !!debouncedStartDate && !!debouncedEndDate;

  const { config } = usePrepareContractWrite({
    address,
    abi,
    functionName: "launch",
    args: [
      debouncedFundGoal,
      debouncedStartDate?.toString(),
      debouncedEndDate?.toString(),
    ],
    enabled: isEnabled,
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess() {
      console.log("launch");
    },
  });

  const onSubmit = (data) => {
    write?.();
    console.log("POST:", data);
    const nextMinute = Date.now() + 1000 * 60;
    const nextHour = Date.now() + 1000 * 60 * 60;

    const testData = {
      title: "My campaign",
      subtitle: "An amazing campaign",
      story: "This is the long short story: We need the money",
      startDate: new Date(nextMinute),
      endDate: new Date(nextHour),
      image: "image.png",
      video: "video.mp4",
      goal: [
        {
          token: "637e538f6e0eb6be40e2790f",
          amount: "100",
        },
      ],
    };

    fetch("http://localhost:10000/api/v1/campaigns", {
      method: "POST",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(testData),
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)));

    reset();
  };

  const testApi = async () => {
    const res = await fetch("http://localhost:10000/api/v1/health");
    console.log(res);
  };

  const handleDate = (field, date) => {
    setValue(field, date, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <Container>
      <Title>Create New Project</Title>
      <button onClick={() => testApi()}>TEST APIS</button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          label="Project Title"
          name="title"
          {...register("title")}
          type="text"
          error={errors?.title}
        />
        <input
          id="subtitle"
          label="Subtitle"
          name="subtitle"
          {...register("subtitle")}
          type="text"
          error={errors?.subtitle}
        />
        <input
          id="story"
          label="Description / Story"
          name="story"
          {...register("story")}
          type="text"
          error={errors?.story}
        />
        <Select
          type="text"
          name="token"
          label="Token"
          id="token"
          register={register}
          error={errors?.token}
          options={[
            { value: "USD", name: "USD" },
            { value: "BTC", name: "BTC" },
            { value: "ETH", name: "ETH" },
            { value: "NGN", name: "NGN" },
            { value: "EUR", name: "EUR" },
          ]}
        />
        <input
          label="Fund Goal"
          name="fundGoal"
          id="fundGoal"
          {...register("fundGoal")}
          error={errors?.fundGoal}
        />
        <br />
        <h2>Dates</h2>
        <input
          type="date"
          label="Start Date"
          name="startDate"
          {...register("startDate")}
          id="startDate"
          onChange={(event) => handleDate("startDate", event.target.value)}
          error={errors?.startDate}
        />
        <input
          type="date"
          name="endDate"
          label="End Date"
          id="endDate"
          {...register("endDate")}
          onChange={(event) => handleDate("endDate", event.target.value)}
          error={errors?.endDate}
        />
        <br />
        <button type="submit" disabled={!write}>
          Create
        </button>
      </Form>
    </Container>
  );
};

export default Create;
