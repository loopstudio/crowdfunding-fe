import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Select from "../../components/select/select";
import { Container, Form, Title } from "./create.styles";
import { useForm } from "react-hook-form";
import { number, object, string, date, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Create = () => {
  const validationSchema = object().shape({
    title: string().required(),
    subtitle: string().required(),
    story: string().required(),
    token: string().required(),
    fundGoal: number().required(),
    startDate: date()
      .required()
      .max(new Date(), "Created date can not be future"),
    endDate: date()
      .required()
      .min(ref("startDate"), "End date should be after start date"),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {},
    mode: "onChange",
  };
  const { handleSubmit, reset, register, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("POST:", data);

    // The testData was copied from the Postman requests:
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
      headers: {
        // TBD: What headers are needed?
        // "Content-Type": "application/json",
      },
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

  return (
    <Container>
      <Title>Create New Project</Title>
      {/* Testing buttons (to be deleted) */}
      <button onClick={() => testApi()}>TEST APIS</button>
      <button onClick={() => onSubmit()}>TEST SUBMIT</button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Project Title"
          name="title"
          register={register}
          type="text"
          error={errors?.title}
        />
        <Input
          id="subtitle"
          label="Subtitle"
          name="subtitle"
          register={register}
          type="text"
          error={errors?.subtitle}
        />
        <Input
          id="story"
          label="Description / Story"
          name="story"
          register={register}
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
        <Input
          label="Fund Goal"
          type="number"
          name="fundGoal"
          id="fundGoal"
          register={register}
          error={errors?.fundGoal}
        />
        <br />
        <h2>Dates</h2>
        <Input
          type="date"
          label="Start Date"
          name="startDate"
          register={register}
          id="startDate"
          value={new Date().toISOString().split("T")[0]}
          error={errors?.startDate}
        />
        <Input
          type="date"
          name="endDate"
          label="End Date"
          id="endDate"
          register={register}
          error={errors?.endDate}
        />
        <br />
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
};

export default Create;
