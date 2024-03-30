import { Axios } from "@/feature/common/api";
import { useMutation } from "@tanstack/react-query";
import { channelAPI } from ".";

const ChannelMutationOptions = {
  join: () => ({
    mutationKey: [{ scope: "channel", action: "join" }],
    mutaionFn: (channelName: string) => channelAPI.join({ channelName }),
  }),
  create: () => ({
    mutaionKey: [{ scope: "channel", action: "create" }],
    mutationFn: (channelName: string) =>
      channelAPI.create({ channelName, isPrivate: false, maxUserAmount: 50 }),
  }),
};

export const useChannelJoinMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => unknown;
  onError?: () => unknown;
} = {}) => {
  return useMutation({ ...ChannelMutationOptions.join(), onSuccess, onError });
};

export const useChannelCreateMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => unknown;
  onError?: () => unknown;
} = {}) => {
  return useMutation({ ...ChannelMutationOptions.create(), onSuccess, onError });
};
