import type { Metadata } from "next";
import "@/styles/globals.css";
import { ProviderGroups } from "@/widgets/ProviderGroups";

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
      <body className="w-screen h-screen">
        <ProviderGroups>{children}</ProviderGroups>
      </body>
    </html>
  );
}
