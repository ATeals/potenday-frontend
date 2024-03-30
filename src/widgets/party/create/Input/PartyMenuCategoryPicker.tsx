"use client";

import { useBottomSheetContext } from "@UI/BottomSheetWapper/BottomSheetWapper";
import { Flex, Box, Badge, Text } from "@UI/index";
import Image from "next/image";

export const FOOD_CATEGORIES = [
  {
    name: "전체",
    iconURL: "",
    id: "all",
  },
  {
    name: "한식",
    iconURL: "/icons/foodCategory/korean_food.png",
    id: "korean",
  },
  {
    name: "양식",
    iconURL: "/icons/foodCategory/western_food.png",
    id: "western",
  },
  {
    name: "일식",
    iconURL: "/icons/foodCategory/japanese_food.png",
    id: "japanese",
  },
  {
    name: "중식",
    iconURL: "/icons/foodCategory/chinese_food.png",
    id: "chinese",
  },
  {
    name: "분식",
    iconURL: "/icons/foodCategory/school_food.png",
    id: "school",
  },
  {
    name: "간편식",
    iconURL: "/icons/foodCategory/convenience_food.png",
    id: "convenience",
  },
] as const;

export const PartyMenuCategoryPicker = ({ onSubmit }: { onSubmit: (name: string) => unknown }) => {
  const { close } = useBottomSheetContext();

  return (
    <Flex
      style={{ direction: "column", justify: "space-between", gap: 10 }}
      className="p-10 h-full"
    >
      <Flex style={{ flexWrap: "wrap", gap: 40 }} className="h-4/5">
        {FOOD_CATEGORIES.filter((i) => i.name !== "전체").map(({ name, iconURL, id }) => (
          <Box
            size="2xl"
            key={id}
            as="button"
            onClick={() => {
              close().then(() => onSubmit(name));
            }}
            className="p-2 bg-secondary-md rounded-lg "
          >
            <Flex style={{ direction: "column", justify: "space-between" }}>
              <Image src={iconURL} alt={name} width={40} height={50} />
              <Text>{name}</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
      <Badge
        onClick={() => {
          close().then(() => onSubmit("기타"));
        }}
        as="button"
        className="w-full p-2  bg-primary-lg text-white"
      >
        선택
      </Badge>
    </Flex>
  );
};
