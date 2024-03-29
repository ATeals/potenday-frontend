import { DividerLine } from "@UI/DividerLine";
import { Flex } from "@UI/Flex";
import { AddPartySVG } from "@UI/Svgs";
import { Text } from "@UI/Text";
import { Icon } from "@UI/icon";
import Link from "next/link";

const PATH = {
  HOME: "/",
};

export const Navigation = () => {
  return (
    <nav className="absolute bottom-0 w-full z-30 bg-white">
      <DividerLine />
      <Flex style={{ justify: "space-between" }} className="p-5 pt-1 pb-5">
        <Link href={PATH.HOME}>
          <Flex style={{ direction: "column" }}>
            <Icon icon="house" size="lg" />
            <Text size="sm">홈</Text>
          </Flex>
        </Link>

        <Flex style={{ direction: "column" }}>
          <Icon icon="house" size="lg" />
          <Text size="sm">기본</Text>
        </Flex>

        <Flex style={{ direction: "column" }}>
          <AddPartySVG />
        </Flex>

        <Flex style={{ direction: "column" }}>
          <Icon icon="bookmark" size="lg" />
          <Text size="sm">찜</Text>
        </Flex>

        <Flex style={{ direction: "column" }}>
          <Icon icon="person" size="lg" />
          <Text size="sm">마이페이지</Text>
        </Flex>
      </Flex>
    </nav>
  );
};
