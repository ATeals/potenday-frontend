import { Axios } from "@/feature/common/api";
import { SearchLocationValue } from "../types";

export const MapAPI = {
  search: (keyword: string) =>
    Axios.get<{ data: { stores: SearchLocationValue[] } }>(`/map`, {
      params: {
        keyword,
      },
    }),
};
