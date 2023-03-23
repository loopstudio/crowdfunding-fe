import axios from "axios";

import { ACCESS_TOKEN, ROUTES } from "../constants";

export const postData = async (formData, router) => {
  try {
    const {
      title,
      subtitle,
      startDate,
      endDate,
      story,
      fundGoal,
      token,
      url,
      collaborators,
    } = formData;

    await axios.post(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns`,
      {
        title,
        subtitle,
        story,
        startDate: Math.floor(new Date(startDate).getTime() / 1000),
        endDate: Math.floor(new Date(endDate).getTime() / 1000),
        goal: [
          {
            amount: Number(fundGoal),
            tokenAddress: token,
          },
        ],
        url: url.length > 0 ? url : null,
        collaborators: collaborators.length > 0 ? collaborators : null,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(ACCESS_TOKEN)}`,
        },
      }
    );

    router.push(ROUTES.createdProjects);
  } catch (error) {
    console.error(error);
  }
};

export const postLogin = async (address, data, login, router) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/auth/login`,
      {
        publicAddress: address,
        signature: data,
      }
    );

    const accessToken = res.data.data.accessToken;
    login(accessToken);

    router.push(ROUTES.home);
  } catch (error) {
    console.error(`Error logging in: ${error}`);
  }
};

export const postRegister = async (address, formData, setNonce, reset) => {
  const { username, email } = formData;

  const {
    data: { data },
  } = await axios.post(`${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/users`, {
    username,
    email,
    publicAddress: address,
  });

  setNonce(data.nonce);

  reset();
};
