"use client";

import { ENV } from "@/config";
import { Container, NavermapsProvider } from "react-naver-maps";

export const NaverMapProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavermapsProvider ncpClientId={ENV.NAVER_MAP_CLIENT_ID}>
      <Container className="w-full h-full">{children} </Container>
    </NavermapsProvider>
  );
};
