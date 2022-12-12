import axios from "axios";
import { useLaunch } from "../../hooks/useLaunch";
import { useCreateForm } from "../../hooks/useCreateForm";
import { Select, Input, Button } from "../../components";

import {
  START_DATE,
  END_DATE,
  FUND_GOAL,
  TITLE,
  SUBTITLE,
  STORY,
  TOKEN,
} from "../../constants";

import { Container, Form, Title } from "./create.styles";

const Create = () => {
  const {
    errors,
    getValues,
    handleDate,
    handleTokenSelect,
    handleSubmit,
    register,
  } = useCreateForm();

  const postData = async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns`,
        {
          ...formData,
        }
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const { write, isLoading } = useLaunch(
    getValues(START_DATE),
    getValues(END_DATE),
    getValues(FUND_GOAL),
    getValues(),
    postData
  );

  const onSubmit = () => {
    write?.();
  };

  return (
    <Container>
      <Title>Create New Project</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register(TITLE)}
          error={errors?.title}
          label="Project Title"
          name={TITLE}
          type="text"
        />
        <Input
          {...register(SUBTITLE)}
          error={errors?.subtitle}
          label="Subtitle"
          name={SUBTITLE}
          type="text"
        />
        <Input
          {...register(STORY)}
          error={errors?.story}
          label="Description / Story"
          name={STORY}
          type="text"
        />
        <Select
          {...register(TOKEN)}
          error={errors?.token}
          label="Token"
          name={TOKEN}
          type="text"
          onChange={handleTokenSelect}
          options={[
            { value: "USD", name: "USD" },
            { value: "BTC", name: "BTC" },
            { value: "ETH", name: "ETH" },
            { value: "NGN", name: "NGN" },
            { value: "EUR", name: "EUR" },
          ]}
        />
        <Input
          {...register(FUND_GOAL)}
          error={errors?.fundGoal}
          label="Fund Goal"
          name={FUND_GOAL}
        />
        <br />
        <h2>Dates</h2>
        <Input
          {...register(START_DATE)}
          error={errors?.startDate}
          label="Start Date"
          name={START_DATE}
          onChange={(event) => handleDate(START_DATE, event.target.value)}
          type="date"
        />
        <Input
          {...register(END_DATE)}
          error={errors?.endDate}
          label="End Date"
          name={END_DATE}
          onChange={(event) => handleDate(END_DATE, event.target.value)}
          type="date"
        />
        <br />
        <Button type="submit" disabled={!write || isLoading}>
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default Create;
