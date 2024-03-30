import { Axios } from "@/feature/common/api";

export interface User {
  userId: number;
  provider: string;
  nickname: string;
  email: string;
  profileImage: string;
  createdAt: string;
  channelId: number;
}

export const AuthAPI = {
  // loginKakao: () => Axios.get("/auth/login/kakao"),
  // loginNaver: () => Axios.get("/auth/login/naver"),
  getLoggedInUser: () => Axios.get<{ data: User }>("/user"),
};
