import { NaverMapProvider, QueryProvider } from "@/feature/Provider";
import { OverlayProvider } from "@/feature/common/hooks/useOverlay";

export const ProviderGroups = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <OverlayProvider>
        <NaverMapProvider>{children}</NaverMapProvider>
      </OverlayProvider>
    </QueryProvider>
  );
};
