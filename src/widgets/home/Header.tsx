"use client";

import { Carousel } from "@/feature/UI/Caroucel";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Text } from "@UI/Text";
import { Icon } from "@UI/icon";
import Image from "next/image";

export const Header = () => {
  return (
    <header className=" relative">
      <Carousel enabledDrag className="rounded-xl">
        <div className="relative">
          <img
            src="/images/maskGroup.png"
            alt="그룹"
            className="object-fill w-full h-full"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>

          <Flex
            className="absolute inset-0 w-2/3 pl-5 bottom-0 pb-20"
            style={{ justify: "end", align: "start", direction: "column", gap: 10 }}
          >
            <Text className="text-gray-200 ">오픈 기념 이벤트</Text>
            <Text size="xl" className="text-white text-shadow-lg font-semibold">
              렛잇에서 점심친구 찾고! 선물 받자
            </Text>
          </Flex>
        </div>
      </Carousel>

      <Flex
        as="section"
        className="p-5 px-3 absolute top-0 w-full text-white"
        style={{ justify: "space-between", align: "center" }}
      >
        <Image src="/logo.png" alt="logo" width={80} height={80} />
        <Icon icon="bell" />
      </Flex>
    </header>
  );
};
