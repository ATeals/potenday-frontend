"use client";

import { ENV } from "@/config";
import { NaverSVG } from "@/feature/Svgs";
import { ChatSVG } from "@/feature/Svgs/ChatSVG";
import { Box } from "@UI/Box";
import { DividerLine } from "@UI/DividerLine";
import { Flex } from "@UI/Flex";
import { Text } from "@UI/Text";
import Image from "next/image";
import Link from "next/link";

const LogInParmasPage = () => {
  return (
    <section className="h-full w-full p-10 flex flex-col items-center justify-center relative">
      <Image src="/images/LETEAT.png" alt="logo" width={200} height={200} />

      <Flex style={{ direction: "column", justify: "end", gap: 10 }} className="mt-40 w-full">
        <Link className="w-full" href={`${ENV.API_URL}/auth/login/kakao`}>
          <Flex
            as={Box}
            style={{ justify: "space-between" }}
            className="bg-yellow-300 p-3 px-5 w-full rounded-lg"
          >
            <ChatSVG className="fill-[#472a2a]" />
            <Text> 카카오로 3초 만에 시작하기</Text>
            <div></div>
          </Flex>
        </Link>

        <Link className="w-full" href={`${ENV.API_URL}/auth/login/kakao`}>
          <Flex
            as={Box}
            style={{ justify: "space-between" }}
            variant="outline"
            className="p-1 px-3 w-full rounded-lg"
          >
            <NaverSVG />
            <Text> 네이버로 계속하기</Text>
            <div className="mr-4"></div>
          </Flex>
        </Link>
        <DividerLine className="my-4" />

        <Flex style={{ gap: 20 }}>
          <Text>회원가입</Text>
          <DividerLine direction="vertical" className=" border-gray-400" />
          <Text>이메일 로그인</Text>
          <DividerLine direction="vertical" className=" border-gray-400" />
          <Text>문의하기</Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default LogInParmasPage;
