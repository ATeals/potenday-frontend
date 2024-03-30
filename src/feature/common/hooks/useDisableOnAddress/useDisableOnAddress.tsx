import { usePathname } from "next/navigation";

export const useDisableOnAddress = (addresses: string[]) => {
  const path = usePathname();

  return !addresses.includes(path);
};
