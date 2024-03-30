"use client";

import { FoodCategoryList } from "@/widgets/home";
import { ChannelPartyList } from "@/widgets/home/ChannelPartyList";
import { Header } from "@/widgets/home/Header";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Text } from "@UI/Text";
import Link from "next/link";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="p-2 px-5">
        <Heading>삼성물산 </Heading>
      </section>
      <FoodCategoryList />
      <section className="px-3">
        <Text>실시간 인기 파티 추천</Text>
        <Flex style={{ justify: "space-between" }}>
          <Heading size="md">실시간 우리채널 인기 파티! 🎉</Heading>

          <Link href={"/search"} className="text-gray-400">
            <Text> 더보기 &rarr;</Text>
          </Link>
        </Flex>
        <Suspense fallback={<div>loading...</div>}>
          <ChannelPartyList />
        </Suspense>
      </section>
    </>
  );
};

export default HomePage;
