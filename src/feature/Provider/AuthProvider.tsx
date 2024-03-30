"use client";

import { useRouter } from "next/navigation";
import { useAuthUserQuery } from "../auth/api/query";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthUserQuery();

  const router = useRouter();

  if (!user) router.replace("/login");

  return children;
};
