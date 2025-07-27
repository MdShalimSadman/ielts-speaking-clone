// services/tenmsClient.ts
import axios from "axios";

export const TenmsClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "X-TENMS-SOURCE-PLATFORM": "web",
    accept: "application/json",
  },
});

export { TenmsClient as API };
