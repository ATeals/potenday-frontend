import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { CreatePartyRequest, Party, PartyAPI } from ".";

const PartyQueryOptions = {
  getAll: (channelId: number) => ({
    queryKey: [{ scope: "Party", channelId }],
    queryFn: async () => {
      const res = await PartyAPI.getAll(channelId);

      return res?.data?.data?.parties || [];
    },
  }),

  get: (id: number, channelId: number) => ({
    queryKey: [{ scope: "Party", id, channelId }],
    queryFn: async () => {
      const res = await PartyAPI.get(id, channelId);

      return res.data.data;
    },
  }),
};

const PartyMutationOptions = {
  create: (channelId: number) => ({
    mutationKey: [{ scope: "Party", channelId }],
    mutationFn: (data: CreatePartyRequest) => PartyAPI.create(data, channelId),
  }),
  join: (channelId: number) => ({
    mutationKey: [{ scope: "Party", channelId }],
    mutationFn: (partyId: number) => PartyAPI.join(partyId, channelId),
  }),
};

export const usePartiesQuery = (channelId: number) => {
  const { data } = useSuspenseQuery(PartyQueryOptions.getAll(channelId));

  const parties = data || [];

  return parties;
};

export const usePartyQuery = (id: number, channelId: number) => {
  return useSuspenseQuery(PartyQueryOptions.get(id, channelId));
};

export const usePartyCreateMutation = (
  channelId: number,
  { onSuccess }: { onSuccess?: (res: { data: { data: Party } }) => unknown } = {}
) => {
  return useMutation({
    ...PartyMutationOptions.create(channelId),
    onSuccess: (data) => onSuccess?.(data),
  });
};

export const usePartyJoinMutation = (
  channelId: number,
  {
    onSuccess,
    onError,
  }: { onSuccess?: (res: { data: { data: Party } }) => unknown; onError?: () => unknown } = {}
) => {
  return useMutation({
    ...PartyMutationOptions.join(channelId),
    onSuccess: (data) => onSuccess?.(data),
    onError,
  });
};
