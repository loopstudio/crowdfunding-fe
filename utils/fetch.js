import axios from "axios";

export const fetchCampaigns = async (activePage, search) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns?page=${activePage}&size=12&search=${search}`
    );
    return data.data;
  } catch (error) {
    console.log(`Error querying campaigns: ${error}`);
  }
};

export const fetchCampaign = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns/${id}`
    );
    return data.data;
  } catch (error) {
    console.log(`Error querying campaign ${id}: ${error}`);
  }
};

export const fetchTokens = async (accessToken) => {
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

export const fetchCreatedCampaigns = async (
  activePage,
  search,
  accessToken
) => {
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

export const fetchPledgedCampaigns = async (
  activePage,
  search,
  accessToken
) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/campaigns-pledge?page=${activePage}&size=9&search=${search}`,
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

export const fetchNonce = async (address, setNonce) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/auth/${address}/nonce`
    );
    setNonce(res.data.data);
  } catch (error) {
    console.log(`Error querying nonce: ${error}`);
  }
};
