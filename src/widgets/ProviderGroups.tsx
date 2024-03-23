import { NaverMapProvider, QueryProvider } from "@/feature/Provider";

export const ProviderGroups = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <NaverMapProvider>{children}</NaverMapProvider>
    </QueryProvider>
  );
};
