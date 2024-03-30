"use client";

import { useBottomSheetContext } from "@UI/BottomSheetWapper/BottomSheetWapper";
import { Flex, Input, Badge } from "@UI/index";
import { useEffect, useRef, useState } from "react";

export const PartyNameInput = ({ onSubmit }: { onSubmit: (name: string) => unknown }) => {
  const [name, setName] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const { close } = useBottomSheetContext();

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <Flex
      style={{ direction: "column", justify: "space-between", gap: 10 }}
      className="p-10 h-full"
    >
      <Input ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
      <Badge
        onClick={() => {
          close().then(() => onSubmit(name));
        }}
        as="button"
        className="w-full p-2  bg-primary-lg text-white"
      >
        선택
      </Badge>
    </Flex>
  );
};
