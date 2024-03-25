export const ENV = {
  NAVER_MAP_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID!,
  IS_DEV: process.env.NODE_ENV === "development",
  LOCAL_HOST: "http://localhost:3000/",
  KAKAO_APP_KEY: process.env.KAKAO_APP_KEY!,
  KAKAO_SECRET: process.env.KAKAO_SECRET!,
} as const;
