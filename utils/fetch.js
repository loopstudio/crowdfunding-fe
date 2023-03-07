import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

export const fetchCampaigns = async () => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns?page=0&size=20`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(`Error querying campaigns: ${error}`);
  }
};

export const fetchCampaign = async (id) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(`Error querying campaign ${id}: ${error}`);
  }
};

export const fetchTokens = async () => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/tokens`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(`Error querying campaigns: ${error}`);
  }
};

export const fetchCreatedCampaigns = async (activePage, search) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns?page=${activePage}&size=9&own=true&search=${search}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(`Error querying campaigns: ${error}`);
  }
};
