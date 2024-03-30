import { ENV } from "@/config";
import axios from "axios";

export const Axios = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
