import axios from "../axios";

export const getListUserRequest = async () => {
  return axios.get("/user");
};

export const getUserDetailRequest = async (uId) => {
  return axios.get("/user/" + uId);
};

export const deleteUserRequest = async (uId) => {
  return axios.delete("/user/" + uId);
};

export const createNewUserRequest = async (data) => {
  return axios.post("/user", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const updateUserRequest = async (uId, data) => {
  return axios.put(`/user/${uId}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
