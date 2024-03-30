import { Axios } from "@/feature/common/api";

export const channelAPI = {
  join: ({ channelName, password }: { channelName: string; password?: string }) =>
    Axios.post(`/channel/${channelName}/join`, {
      password,
    }),

  get: ({ channelName }: { channelName: string }) => Axios.get(`/channel/${channelName}`),
  create: ({
    channelName,
    password,
    maxUserAmount = 50,
    isPrivate = false,
  }: {
    channelName: string;
    password?: string;
    maxUserAmount?: number;
    isPrivate?: boolean;
  }) =>
    Axios.post(`/channel/new`, {
      channelName,
      password,
      maxUserAmount,
      isPrivate,
    }),
};
