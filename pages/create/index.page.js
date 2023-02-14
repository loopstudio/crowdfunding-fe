import axios from "axios";
import { useState, useEffect } from "react";

import { useLaunch } from "hooks/useLaunch";
import { useCreateForm } from "hooks/useCreateForm";
import { formatSelectOptions } from "utils/select";
import { Select, Input, Button } from "components";
import {
  ACCESS_TOKEN,
  END_DATE,
  FUND_GOAL,
  START_DATE,
  STORY,
  SUBTITLE,
  TITLE,
  TOKEN,
} from "constants";

import { Container, Form, Title } from "./create.styles";

const Create = () => {
  const [tokens, setTokens] = useState([]);
  const [isTokensLoading, setIsTokensLoading] = useState(false);

  const {
    errors,
    getValues,
    handleDate,
    handleTokenSelect,
    handleSubmit,
    register,
  } = useCreateForm();

  const postData = (formData) => {
    try {
      axios.post(
        `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns`,
        {
          title: formData.title,
          subtitle: formData.subtitle,
          startDate: Math.floor(new Date(formData.startDate).getTime() / 1000),
          endDate: Math.floor(new Date(formData.endDate).getTime() / 1000),
          goal: [
            {
              amount: Number(formData.fundGoal),
              tokenAddress: formData.token,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem(ACCESS_TOKEN)}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTokens = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/tokens`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem(ACCESS_TOKEN)}`,
          },
        }
      );
      setTokens(res.data.data);
    } catch (error) {
      console.log(`Error querying campaigns: ${error}`);
    }
    setIsTokensLoading(false);
  };

  const { write } = useLaunch(
    getValues(START_DATE),
    getValues(END_DATE),
    getValues(FUND_GOAL),
    getValues(),
    postData
  );

  const onSubmit = () => {
    write?.();
  };

  useEffect(() => {
    setIsTokensLoading(true);
    fetchTokens();
  }, []);

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
          disabled={isTokensLoading}
          type="text"
          onChange={handleTokenSelect}
          options={formatSelectOptions(tokens)}
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
        <Button type="submit" disabled={false}>
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default Create;
