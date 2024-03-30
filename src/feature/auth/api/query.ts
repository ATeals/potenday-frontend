import { useSuspenseQuery } from "@tanstack/react-query";
import { AuthAPI, User } from ".";
import { useRouter } from "next/router";

export const useAuthUserQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [{ scope: "user", key: "me" }],
    queryFn: async () => {
      const res = await AuthAPI.getLoggedInUser();

      if (res.status > 400) return undefined;

      return res.data.data;
    },
  });

  const router = useRouter();

  if (!data) router.replace("/login");

  return data as User;
};
