import { NaverMapProvider } from "@/feature/Provider";

export const ProviderGroups = ({ children }: { children: React.ReactNode }) => {
  return <NaverMapProvider>{children}</NaverMapProvider>;
};
