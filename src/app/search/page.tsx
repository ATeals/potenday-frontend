"use client";

import { PartyList } from "@/widgets/home/PartyList";
import { Badge } from "@UI/Badge";
import { DividerLine } from "@UI/DividerLine";
import { Flex } from "@UI/Flex";
import { BackSVG, BellSVG, MenuSVG } from "@UI/Svgs";
import { Text } from "@UI/Text";

import { useRouter } from "next/navigation";

const SearchPage = () => {
  const router = useRouter();
  return (
    <>
      <section className="absolute top-0 w-full bg-white">
        <Flex as="div" className="py-5 px-3 " style={{ gap: 20, justify: "space-between" }}>
          <button onClick={() => router.back()}>
            <BackSVG />
          </button>
          <Text size="lg">취향 저격 모임</Text>
          <BellSVG />
        </Flex>
        <DividerLine />
      </section>

      <section className="pt-[68px] bg-gray-200 h-full overflow-scroll">
        <section className="p-5 px-2">
          <Flex
            as="article"
            style={{ flexWrap: "nowrap", justify: "start", gap: 10 }}
            className="overflow-scroll px-5"
          >
            <Badge className=" whitespace-nowrap p-1 px-2 border-gray-400">
              <MenuSVG />
            </Badge>
            <Badge className=" whitespace-nowrap p-1 px-2 border-gray-400">
              <Text size="sm">날짜</Text>
            </Badge>
            <Badge className=" whitespace-nowrap p-1 px-2 border-gray-400">
              <Text size="sm">정원</Text>
            </Badge>
            <Badge className=" whitespace-nowrap p-1 px-2 border-gray-400">
              <Text size="sm">나이</Text>
            </Badge>
          </Flex>
        </section>

        <section className="p-2">
          <PartyList />
        </section>
      </section>
    </>
  );
};

export default SearchPage;
