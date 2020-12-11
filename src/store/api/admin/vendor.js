import axios from "../axios";

export const getListVendorRequest = async () => {
  return axios.get("/vendor");
};