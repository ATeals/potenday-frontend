"use client";

import { useAuthUserQuery } from "@/feature/auth/api/query";
import { useRouter } from "next/navigation";

const LogInPage = () => {
  const router = useRouter();

  const user = useAuthUserQuery();

  console.log(user);

  if (!user) router.replace("/login");

  if (!user.channelId) router.replace("/channel/create");

  router.replace("/");

  return (
    <section className="h-full w-full p-10 flex flex-col items-center justify-center"></section>
  );
};

export default LogInPage;
