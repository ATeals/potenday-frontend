import { ENV } from "@/config";
import { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    KakaoProvider({
      clientId: ENV.KAKAO_APP_KEY,
      clientSecret: ENV.KAKAO_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 15, // 보름
  },
} satisfies NextAuthOptions;
