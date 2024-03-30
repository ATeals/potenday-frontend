"use client";

import { NaverMapProvider, QueryProvider } from "@/feature/Provider";
import { AuthProvider } from "@/feature/Provider/AuthProvider";
import { OverlayProvider } from "@/feature/common/hooks/useOverlay";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ProviderGroups = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <OverlayProvider>
        <AuthProvider>
          <NaverMapProvider>{children}</NaverMapProvider>
        </AuthProvider>
      </OverlayProvider>
      <ReactQueryDevtools />
    </QueryProvider>
  );
};
