"use client";

import { useBottomSheetContext } from "@UI/BottomSheetWapper/BottomSheetWapper";
import { Flex, Badge, Text } from "@UI/index";
import { useState } from "react";

import "@/styles/range-input.css";
import { PeopleSVG } from "@/feature/Svgs";
import { PersonSVG } from "@/feature/Svgs/PersonSVG";

export const PartyMembersPicker = ({
  defaultState = 0,
  onSubmit,
}: {
  defaultState?: number;
  onSubmit: (members: number) => unknown;
}) => {
  const [members, setMembers] = useState<number>(defaultState);
  const { close } = useBottomSheetContext();

  return (
    <Flex
      style={{ direction: "column", justify: "space-between", gap: 10 }}
      className="p-10 h-full w-full"
    >
      <Flex style={{ direction: "column", gap: 10 }} className="w-full">
        <Text size="lg" className="text-gray-400">
          {members}
        </Text>
        <Flex className="w-full" style={{ gap: 5 }}>
          <PersonSVG className="fill-primary-lg" />
          <input
            className="w-full rounded-lg overflow-hidden appearance-none bg-gray-300"
            type="range"
            step={1}
            max={10}
            min={0}
            value={members}
            onChange={(e) => setMembers(Number(e.target.value))}
          />
          <PeopleSVG className="fill-primary-lg" />
        </Flex>
      </Flex>

      <Badge
        onClick={() => {
          close().then(() => onSubmit(members));
        }}
        as="button"
        className="w-full p-2  bg-primary-lg text-white"
      >
        선택
      </Badge>
    </Flex>
  );
};
