import type { Metadata } from "next";
import { ProviderGroups } from "@/widgets/ProviderGroups";

import { Flex } from "@UI/Flex";
import { Icon } from "@UI/icon";
import { Text } from "@UI/Text";
import { DividerLine } from "@UI/DividerLine";

import "@/styles/globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LET's EAT",
  description: "",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>

      <body className="relative w-screen sm:w-[393px] sm:mx-auto h-dvh">
        <main className="pb-[77px] overflow-scroll w-full h-dvh">
          <ProviderGroups>{children}</ProviderGroups>
        </main>
        <Navigation />
      </body>
    </html>
  );
}

const PATH = {
  HOME: "/",
};

const Navigation = () => {
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
