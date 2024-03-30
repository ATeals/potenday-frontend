import { ENV } from "@/config";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTcxMTgwNzUzMiwiZXhwIjoxNzEyNDEyMzMyfQ.yKt782WH6NB7oCCip4dQl249rHUEG_0fDeIaWtfgRJs";

export const Axios = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});
