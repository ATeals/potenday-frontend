"use client";

import { ChatSVG } from "@/feature/Svgs/ChatSVG";
import { Box } from "@UI/Box";
import { Flex } from "@UI/Flex";
import Image from "next/image";

const LogInPage = () => {
  return (
    <section className="h-full w-full p-10 flex flex-col items-center justify-center">
      <Image src="/images/LETEAT.png" alt="logo" width={200} height={200} />

      <Flex style={{ direction: "column", justify: "center", gap: 10 }} className="mt-40 w-full">
        <Flex
          as={Box}
          style={{ justify: "space-between" }}
          className="bg-yellow-300 p-2 px-5 w-full rounded-lg"
        >
          <ChatSVG className="fill-[#472a2a]" />
          <span> 카카오로 3초만에 시작하기</span>
          <div></div>
        </Flex>
        <Box variant="outline" className=" p-2 px-5 w-full rounded-lg">
          Apple로 계속하기
        </Box>
      </Flex>
    </section>
  );
};

export default LogInPage;
