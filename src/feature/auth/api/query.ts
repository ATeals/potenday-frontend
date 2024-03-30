import { useSuspenseQuery } from "@tanstack/react-query";
import { AuthAPI, User } from ".";

export const useAuthUserQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: [{ scope: "user", key: "me" }],
    queryFn: async () => {
      const res = await AuthAPI.getLoggedInUser();

      if (res.status > 400)
        return {
          userId: 1,
          nickname: "먹짱",
          email: "eatking@naver.com",
          profileImage: "",
          createdAt: "2021-10-10",
          channelId: 1,
        };

      return res.data.data;
    },
  });

  return data;
};
