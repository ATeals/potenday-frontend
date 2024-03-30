"use client";

import { DividerLine } from "@UI/DividerLine";
import { Flex } from "@UI/Flex";
import { AddPartySVG } from "@/feature/Svgs";
import { Text } from "@UI/Text";
import Link from "next/link";
import { HomeSVG } from "@/feature/Svgs/HomeSVG";
import { ChatSVG } from "@/feature/Svgs/ChatSVG";
import { BookmarkSVG } from "@/feature/Svgs/BookmarkSVG";
import { PersonSVG } from "@/feature/Svgs/PersonSVG";
import { useDisableOnAddress } from "@/feature/common/hooks/useDisableOnAddress/useDisableOnAddress";
import { useAuthUserQuery } from "@/feature/auth/api/query";
import { Suspense } from "react";

const PATH = {
  HOME: "/",
};

const DISABLE_NAVIGATION_PATH = ["/login", "/party/create", "/channel/create"];

export const Navigation = () => {
  const mount = useDisableOnAddress(DISABLE_NAVIGATION_PATH);

  return (
    mount && (
      <nav className="absolute bottom-0 w-full z-30 bg-white">
        <DividerLine />
        <Flex style={{ justify: "space-between" }} className="p-5 pt-1 pb-5">
          <Link href={PATH.HOME}>
            <Flex style={{ direction: "column" }}>
              <HomeSVG className="w-5 h-5 fill-gray-400" />
              <Text size="sm">홈</Text>
            </Flex>
          </Link>

          <Flex style={{ direction: "column" }}>
            <ChatSVG className="w-5 h-5 fill-gray-400" />
            <Text size="sm">채팅</Text>
          </Flex>

          <Link href={"/party/create"}>
            <Flex style={{ direction: "column" }}>
              <AddPartySVG className="w-10 h-10 fill-gray-400" />
            </Flex>
          </Link>

          <Flex style={{ direction: "column" }}>
            <BookmarkSVG className="w-5 h-5 fill-gray-400" />
            <Text size="sm">찜</Text>
          </Flex>

          <Suspense>
            <MypageNavigation />
          </Suspense>
        </Flex>
      </nav>
    )
  );
};

export const MypageNavigation = () => {
  const user = useAuthUserQuery();

  return (
    <Link href={`users/${user.userId}/profile`}>
      <Flex style={{ direction: "column" }}>
        <PersonSVG className="w-5 h-5 fill-gray-400" />
        <Text size="sm">마이페이지</Text>
      </Flex>
    </Link>
  );
};
