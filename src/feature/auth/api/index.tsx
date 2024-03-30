import { Axios } from "@/feature/common/api";

export const AuthAPI = {
  // loginKakao: () => Axios.get("/auth/login/kakao"),
  // loginNaver: () => Axios.get("/auth/login/naver"),
  getLoggedInUser: () => Axios.get("/user"),
};
