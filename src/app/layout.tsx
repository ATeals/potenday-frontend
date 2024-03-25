import type { Metadata } from "next";
import { ProviderGroups } from "@/widgets/ProviderGroups";

import "@/styles/globals.css";
import { Flex } from "@UI/Flex";
import { Icon } from "@UI/icon";
import { Text } from "@UI/Text";
import { DividerLine } from "@UI/DividerLine";

export const metadata: Metadata = {
  title: "naver map demo",
  description: "demo for naver map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
          integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd"
          crossOrigin="anonymous"
        />
      </head>

      <body className="relative w-screen h-full sm:w-[393px] overflow-scroll sm:mx-auto">
        <main className="pb-[77px] h-full">
          <ProviderGroups>{children}</ProviderGroups>
        </main>
        <Navigation />
      </body>
    </html>
  );
}

const Navigation = () => {
  return (
    <nav className="absolute bottom-0 w-full z-50 bg-white">
      <DividerLine />
      <Flex style={{ justify: "space-between" }} className="p-5 pt-1 pb-5">
        <Flex style={{ direction: "column" }}>
          <Icon icon="house" size="lg" />
          <Text size="sm">홈</Text>
        </Flex>

        <Flex style={{ direction: "column" }}>
          <Icon icon="house" size="lg" />
          <Text size="sm">기본</Text>
        </Flex>

        <Flex style={{ direction: "column" }}>
          <Icon icon="app" size="lg" />
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
