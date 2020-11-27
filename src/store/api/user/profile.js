import axios from "../axios";

export const getProfileRequest = async (token) => {
  return axios.post("/auth/user", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
