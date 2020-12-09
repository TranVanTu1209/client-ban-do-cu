import axios from "../axios";

export const getProfileRequest = async (token) => {
  return axios.post("/auth/user", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfileRequest = async (newProfile) => {
  return axios.post(`/auth/update-profile`, newProfile, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
