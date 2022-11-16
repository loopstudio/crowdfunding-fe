import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Select from "../../components/select/select";
import { Container, Form, Label, Title } from "./create.styles";
import { useForm } from "react-hook-form";
import { number, object, string, date, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Create = () => {
  const validationSchema = object().shape({
    projectName: string().required(),
    subtitle: string().required(),
    category: object().required(),
    description: string().required(),
    currency: object().required(),
    fundGoal: number().required(),
    startDate: date()
      .required()
      .min(new Date(), "Created date can not be future"),
    endDate: date()
      .required()
      .min(new Date(), "Created date can not be future")
      .min(ref("startDate"), "Modified date should be after start date"),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {},
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("POST", data);
    reset();
  };

  return (
    <Container>
      <Title>Create New Project</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="projectName">Project Name</Label>
        <Input
          type="text"
          name="projectName"
          id="projectName"
          error={errors?.projectName}
        />
        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          type="text"
          name="subtitle"
          id="subtitle"
          error={errors?.subtitle}
        />
        {/* <Label htmlFor="category">Category</Label>
        <Select
          type="text"
          name="category"
          id="category"
          error={errors?.category}
          options={[
            { value: "technology", name: "Technology" },
            { value: "nfts", name: "NFTs" },
            { value: "games", name: "Games" },
            { value: "education", name: "Education" },
            { value: "music", name: "Music" },
            { value: "community", name: "Community" },
            { value: "non-profit", name: "Non profit" },
            { value: "other", name: "Other" },
          ]}
        /> */}
        <Label htmlFor="description">Description</Label>
        <Input
          type="text-area"
          name="description"
          id="description"
          error={errors?.description}
        />
        <Label htmlFor="token">Token</Label>
        <Select
          type="text"
          name="token"
          id="token"
          error={errors?.token}
          options={[
            { value: "USD", name: "USD" },
            { value: "BTC", name: "BTC" },
            { value: "ETH", name: "ETH" },
            { value: "NGN", name: "NGN" },
            { value: "EUR", name: "EUR" },
          ]}
        />
        <Label htmlFor="fundGoal">Fund Goal</Label>
        <Input
          type="number"
          name="fundGoal"
          id="fundGoal"
          error={errors?.fundGoal}
        />
        <p>Dates</p>
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          type="date"
          name="startDate"
          id="startDate"
          error={errors?.startDate}
        />

        <Label htmlFor="endDate">End Date</Label>
        <Input
          type="date"
          name="endDate"
          id="endDate"
          error={errors?.endDate}
        />
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
};

export default Create;
