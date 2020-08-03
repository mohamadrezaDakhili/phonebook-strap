import { axiosInstance } from "../index";

export const getData = () => {
  return axiosInstance.get("/users");
};
