"use client";

import { useDebounce } from "@/feature/common/hooks/useDebounce/useDebounce";
import { SearchLocationList } from "@/feature/map/components/SearchLocationList";
import { SearchLocationValue } from "@/feature/map/types";
import { useBottomSheetContext } from "@UI/BottomSheetWapper/BottomSheetWapper";
import { Flex, Input, Badge } from "@UI/index";
import { Suspense, useEffect, useRef, useState } from "react";

export const PartyLocationInput = ({
  onSubmit,
}: {
  onSubmit: (location: SearchLocationValue) => unknown;
}) => {
  const [input, setInput] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<SearchLocationValue>();

  const ref = useRef<HTMLInputElement>(null);

  const { close } = useBottomSheetContext();

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  const searchlocation = useDebounce((keyword: string) => {
    setKeyword(keyword);
  }, 1000);

  return (
    <Flex
      style={{ direction: "column", justify: "space-between", gap: 10 }}
      className="p-10 h-full"
    >
      <Input
        ref={ref}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          searchlocation(e.target.value);
        }}
      />

      {keyword && (
        <Suspense fallback={<div>loading...</div>}>
          <SearchLocationList keyword={keyword} onClick={(location) => setLocation(location)} />
        </Suspense>
      )}

      <Badge
        onClick={() => {
          close().then(() => location && onSubmit(location));
        }}
        as="button"
        className="w-full p-2  bg-primary-lg text-white"
      >
        선택
      </Badge>
    </Flex>
  );
};
