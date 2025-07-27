import { API } from "../client/axiosClient";

export const getIeltsCourse = async (lang:string) => {
  const response = await API.get(`/products/ielts-course?lang=${lang}&=`);
  return response;
};
