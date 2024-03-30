import { ENV } from "@/config";
import axios from "axios";

export const Axios = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  },
});
