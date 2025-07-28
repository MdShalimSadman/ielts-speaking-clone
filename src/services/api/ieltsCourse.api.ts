import { IIeltsResponse, Response } from "@/types/ieltsCourse.type";
import { API } from "../client/axiosClient";

export const getIeltsCourse = async (
  lang: string
): Promise<Response<IIeltsResponse>> => {
  try {
    const response = await API.get(`/products/ielts-course?lang=${lang}`);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch IELTS course: ${error.message}`);
    }
    throw new Error("Failed to fetch IELTS course: Unknown error");
  }
};
