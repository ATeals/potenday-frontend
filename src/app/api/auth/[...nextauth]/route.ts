import { ENV } from "@/config";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions: AuthOptions = {
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
