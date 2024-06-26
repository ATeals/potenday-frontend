import type { Metadata } from "next";
import { ProviderGroups } from "@/widgets/ProviderGroups";
import { Navigation } from "@/widgets/Navigation";

import "@/styles/globals.css";
import Script from "next/script";
import { ENV } from "@/config";

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

        <Script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${ENV.NAVER_MAP_CLIENT_ID}`}
        />
      </head>

      <body className="relative w-screen sm:w-[393px] sm:mx-auto h-dvh">
        <ProviderGroups>
          <main className="pb-[72px] overflow-scroll w-full h-full">{children}</main>
          <Navigation />
        </ProviderGroups>
      </body>
    </html>
  );
}
