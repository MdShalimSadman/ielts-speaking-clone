import { API } from "../client/axiosClient";

export const getIeltsCourse = async () => {
  const response = await API.get("/products/ielts-course?lang=en&=");
  return response;
};
