"use client";

import { NaverMapProvider, QueryProvider } from "@/feature/Provider";
import { OverlayProvider } from "@/feature/common/hooks/useOverlay";
import { SessionProvider } from "next-auth/react";

export const ProviderGroups = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <QueryProvider>
        <OverlayProvider>
          <NaverMapProvider>{children}</NaverMapProvider>
        </OverlayProvider>
      </QueryProvider>
    </SessionProvider>
  );
};
