"use client";

import { CalendarSVG, LocationSVG, PeopleSVG } from "@/feature/Svgs";
import { Box } from "@UI/Box";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Text } from "@UI/Text";
import { Icon } from "@UI/icon";

const PartyDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <Box className="w-full h-[250px] relative bg-gray-400 bg-opacity-70 overflow-visible mb-16">
        <Flex
          style={{ justify: "space-between" }}
          className="p-5 absolute w-full top-0 left-0  text-gray-100"
        >
          <Text size="lg" className="w-[30%]">
            &larr;
          </Text>
          <Text size="lg"></Text>
          <Flex style={{ justify: "end" }} className="w-[30%]">
            <Icon icon="bookmark" />
            <Icon icon="bell" className="ml-2" />
          </Flex>
        </Flex>

        <Flex className="absolute rounded-[50%] w-[140px] h-[140px] bottom-[-2rem] z-30 bg-white shadow-xl">
          <img
            src="/images/ProfileDemo.png"
            alt="profileImg"
            className="object-contain w-[90%] h-[90%]"
          />
        </Flex>
      </Box>

      <Flex style={{ direction: "column", justify: "space-between", gap: 20 }} className="px-10">
        <Heading size="lg">태평동 먹짱</Heading>

        <Flex style={{ gap: 20 }}>
          <Flex style={{ gap: 2 }}>
            <CalendarSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              3월 20일 (수) 19 : 00
            </Text>
          </Flex>

          <Flex style={{ gap: 2 }}>
            <LocationSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              미친고기 서산점
            </Text>
          </Flex>

          <Flex style={{ gap: 2 }}>
            <PeopleSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              4 / 6
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PartyDetailPage;
