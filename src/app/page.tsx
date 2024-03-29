"use client";

import { FoodCategoryList } from "@/widgets/home";
import { Header } from "@/widgets/home/Header";
import { PartyList } from "@/widgets/home/PartyList";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Text } from "@UI/Text";

const HomePage = () => {
  return (
    <>
      <Header />
      <FoodCategoryList />
      <section className="px-3">
        <Text>실시간 인기 파티 추천</Text>
        <Flex style={{ justify: "space-between" }}>
          <Heading size="md">실시간 우리회사 인기 파티! 🎉</Heading>
          <Text className="text-gray-400">더보기 &rarr;</Text>
        </Flex>
        <PartyList />
      </section>
    </>
  );
};

export default HomePage;
