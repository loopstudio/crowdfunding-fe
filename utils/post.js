import axios from "axios";

import { ACCESS_TOKEN } from "../constants";

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

    router.push("/created-projects");
  } catch (error) {
    console.error(error);
  }
};
