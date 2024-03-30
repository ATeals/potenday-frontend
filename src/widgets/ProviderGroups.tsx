"use client";

import { NaverMapProvider, QueryProvider } from "@/feature/Provider";
import { OverlayProvider } from "@/feature/common/hooks/useOverlay";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ProviderGroups = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <OverlayProvider>
        <NaverMapProvider>{children}</NaverMapProvider>
      </OverlayProvider>
      <ReactQueryDevtools />
    </QueryProvider>
  );
};
