import { NaverMapProvider } from "@/feature/Provider";

export const ProviderGrups = ({ children }: { children: React.ReactNode }) => {
  return <NaverMapProvider>{children}</NaverMapProvider>;
};
