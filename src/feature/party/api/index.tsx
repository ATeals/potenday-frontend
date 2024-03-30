import { Axios } from "@/feature/common/api";
import { SearchLocationValue } from "@/feature/map/types";

export interface CreatePartyRequest {
  date: string;
  time: string;
  location: SearchLocationValue;
  foodCategory: string;
  headcount: number;
  title: string;
  description: string;
}

export interface Party {
  partyId: number;
  date: string;
  time: string;
  location: SearchLocationValue;
  foodCategory: string;
  headcount: number;
  title: string;
  description: string;
  nowCount: number;
}

export const PartyAPI = {
  create: (data: CreatePartyRequest, channelId: number) =>
    Axios.post(`/channels/${channelId}/parties/new`, data),

  getAll: (channelId: number) =>
    Axios.get<{ data: { parties: Party[] }; status: number }>(`/channels/${channelId}/parties`),

  get: (id: number, channelId: number) =>
    Axios.get<{ data: Party; status: number }>(`/channels/${channelId}/parties/${id}`),

  join: (partyId: number, channelId: number) =>
    Axios.post(`/channels/${channelId}/parties/${partyId}/join`),

  leave: (partyId: number, channelId: number) =>
    Axios.post(`/channels/${channelId}/parties/${partyId}/leave`),
};
