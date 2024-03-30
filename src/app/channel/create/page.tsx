"use client";

import { Badge } from "@UI/Badge";
import { Box } from "@UI/Box";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Input } from "@UI/Input";
import { useState } from "react";

const ChannelCreatePage = () => {
  const [input, setInput] = useState("");

  return (
    <section className="h-full p-10">
      <Flex
        as={Box}
        style={{ direction: "column", justify: "start", gap: 5 }}
        variant="outline"
        className="rounded-lg shadow-lg py-5 w-full h-[95%] "
      >
        <Heading size="lg" className="">
          <span className="text-primary-lg">채널 명을</span>
          <span>입력해주세요!</span>
        </Heading>

        <section className="p-2 w-full mt-10">
          <Input
            variant="outline"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="채널 명을 입력해주세요!"
            className="w-full"
          />
        </section>
      </Flex>

      <Badge as="button" onClick={() => {}} className="w-full p-2 my-5 bg-primary-lg text-white">
        완료
      </Badge>
    </section>
  );
};

export default ChannelCreatePage;
