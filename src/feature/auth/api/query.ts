import { useSuspenseQuery } from "@tanstack/react-query";
import { AuthAPI } from ".";

export const useAuthUserQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [{ scope: "user", key: "me" }],
    queryFn: async () => {
      const res = await AuthAPI.getLoggedInUser();

      return res.data.data;
    },
  });

  return data;
};
