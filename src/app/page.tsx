"use client";

import { Badge } from "@UI/Badge";
import { Box } from "@UI/Box";
import { DividerLine } from "@UI/DividerLine";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Text } from "@UI/Text";
import { Icon } from "@UI/icon";
import { Container } from "react-naver-maps";
import { Map } from "./Map";

const HomePage = () => {
  return (
    <>
      <Flex as="section" className="p-5 px-3" style={{ justify: "space-between", align: "center" }}>
        <Heading size="lg">{"LET's EAT"}</Heading>
        <Icon icon="bell" />
      </Flex>

      <DividerLine />

      <section>
        <Flex
          as="article"
          className="p-5 px-3"
          style={{ justify: "space-between", align: "center" }}
        >
          <Heading size="md">여의도</Heading>
          <Flex as="div" style={{ align: "center" }}>
            <Icon icon="geo-alt" size="sm" />
            <Text>내위치</Text>
          </Flex>
        </Flex>

        <Flex
          as="article"
          style={{ flexWrap: "nowrap", justify: "start", gap: 10 }}
          className="overflow-scroll px-5"
        >
          <Badge className=" whitespace-nowrap">
            <Icon size="sm" icon="filter-left" />
          </Badge>
          <Badge className=" whitespace-nowrap">
            <Text size="sm">빠르고 간편한 맛집</Text>
          </Badge>
          <Badge className=" whitespace-nowrap">
            <Text size="sm">간편식</Text>
          </Badge>
          <Badge className=" whitespace-nowrap">
            <Text size="sm">데이트 코스</Text>
          </Badge>
          <Badge className=" whitespace-nowrap">
            <Text size="sm">맵부심</Text>
          </Badge>
          <Badge className=" whitespace-nowrap">
            <Text size="sm">직장인의 소울 푸드</Text>
          </Badge>
        </Flex>
      </section>

      <section className="my-2 px-3">
        <div className="h-[200px]">
          <Container
            fallback={<div className="w-full h-full animate-pulse bg-gray-300"></div>}
            className="w-full h-full"
          >
            <Map />
          </Container>
        </div>

        <Flex className=" my-2" style={{ gap: 10, justify: "start" }}>
          <Flex style={{ direction: "column", justify: "space-around" }} as={Box} size="xl">
            <Text size="2xl">🍚</Text>
            <Text>한식</Text>
          </Flex>
          <Flex style={{ direction: "column", justify: "space-around" }} as={Box} size="xl">
            <Text size="2xl">🍚</Text>
            <Text>한식</Text>
          </Flex>
          <Flex style={{ direction: "column", justify: "space-around" }} as={Box} size="xl">
            <Text size="2xl">🍚</Text>
            <Text>한식</Text>
          </Flex>
          <Flex style={{ direction: "column", justify: "space-around" }} as={Box} size="xl">
            <Text size="2xl">🍚</Text>
            <Text>한식</Text>
          </Flex>
          <Flex style={{ direction: "column", justify: "space-around" }} as={Box} size="xl">
            <Text size="2xl">🍚</Text>
            <Text>한식</Text>
          </Flex>
        </Flex>
      </section>

      <section className="px-3">
        <Text>실시간 인기 파티 추천</Text>
        <Flex style={{ justify: "space-between" }}>
          <Heading size="md">실시간 우리회사 인기 파티! 🎉</Heading>
          <Text className="text-gray-400">더보기 &rarr;</Text>
        </Flex>

        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Flex key={i} as="section" style={{ direction: "column" }}>
              <Flex
                style={{ justify: "space-between" }}
                className="rounded-lg shadow-lg w-full h-[150px]  p-2"
              >
                <div className="w-[25%] bg-gray-300 h-full rounded-lg" />
                <Flex
                  style={{ direction: "column", align: "start", justify: "start", gap: 5 }}
                  className="h-full w-[75%] p-2"
                >
                  {/* /뱃지 */}
                  <Flex style={{ gap: 5 }}>
                    <Badge className=" whitespace-nowrap">
                      <Text size="sm">🔥 실시간 인기 파티</Text>
                    </Badge>
                    <Badge className=" whitespace-nowrap">
                      <Text size="sm">구내 식당</Text>
                    </Badge>
                  </Flex>

                  <Heading size="sm">자린고비 🐟 점심값 아끼기 도시락 팟 ! 🍱</Heading>
                  <Text size="sm" className="text-gray-500">
                    3월 25일 (월) 13:00
                  </Text>
                  <Text size="sm" className="text-gray-500">
                    📍 3층 4 세미나실
                  </Text>

                  <Flex>
                    <Box size="sm" className="rounded-[50%] mx-[-5px]"></Box>
                    <Box size="sm" className="rounded-[50%] mx-[-5px] bg-primary-lg"></Box>
                    <Box size="sm" className="rounded-[50%] mx-[-5px] bg-secondary-md"></Box>
                    <Box size="sm" className="rounded-[50%] mx-[-5px] bg-secondary-black"></Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          ))}
      </section>

      <section className="px-3 py-5">
        <Text>나와 잘맞을 호스트 추천</Text>
        <Flex style={{ justify: "space-between" }}>
          <Heading size="md">나랑 취향률이 비슷한 사람이 여는 파티</Heading>
          <Text className="text-gray-400">더보기 &rarr;</Text>
        </Flex>

        <Flex className="py-5" style={{ justify: "space-around" }}>
          <Flex style={{ direction: "column", gap: 5 }}>
            <Box size="lg" className="rounded-[50%]"></Box>
            <Text>지존 먹짱</Text>
          </Flex>
          <Flex style={{ direction: "column", gap: 5 }}>
            <Box size="lg" className="rounded-[50%]"></Box>
            <Text>밥만 잘먹더라</Text>
          </Flex>
          <Flex style={{ direction: "column", gap: 5 }}>
            <Box size="lg" className="rounded-[50%]"></Box>
            <Text>퇴사 마려워요</Text>
          </Flex>
        </Flex>
      </section>
    </>
  );
};

export default HomePage;
