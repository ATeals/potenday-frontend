import { useBottomSheetContext } from "@UI/BottomSheetWapper/BottomSheetWapper";
import { Heading, Badge, Flex } from "@UI/index";
import { Select } from "@UI/Select";
import { useState } from "react";

const HOUR_SELECT_OPTIONS = Array.from({ length: 12 }, (_, index) => ({
  label: `${index + 1}시`,
  value: index + 1,
}));

const MINUTE_SELECT_OPTIONS = Array.from({ length: 60 / 5 }, (_, index) => ({
  label: `${index * 5}분`,
  value: index * 5,
}));

const AM_PM_SELECT_OPTIONS = [
  { label: "오전", value: "AM" },
  { label: "오후", value: "PM" },
];

export const PartyTimePicker = ({
  defaultTime,
  onSubmit,
}: {
  defaultTime: string;
  onSubmit: (time: string) => unknown;
}) => {
  const [time, setTime] = useState<{ type: string; hour: number; min: number }>({
    type: "오후",
    hour: 12,
    min: 0,
  });

  const { close } = useBottomSheetContext();

  const timeString =
    time?.type === "오전"
      ? `${time?.hour}:${time?.min}`
      : `${(time?.hour % 12) + 12}:${String(time?.min).padStart(2, "0")}`;

  return (
    <Flex
      style={{ direction: "column", justify: "space-between", gap: 10 }}
      className="p-2 py-10 h-full"
    >
      <Flex className="w-full">
        <Select
          onSelect={(option) => setTime((state) => ({ ...state, type: option.value }))}
          options={AM_PM_SELECT_OPTIONS}
          defaultOptions={AM_PM_SELECT_OPTIONS[1]}
        />
        <Select
          onSelect={(option) => setTime((state) => ({ ...state, hour: option.value }))}
          options={HOUR_SELECT_OPTIONS}
          plaseholder="시간"
        />
        <Select
          onSelect={(option) => setTime((state) => ({ ...state, min: option.value }))}
          options={MINUTE_SELECT_OPTIONS}
          plaseholder="분"
        />
      </Flex>

      <Heading className="text-center">{timeString}</Heading>
      <Badge
        onClick={() => {
          setTime(time);
          close().then(() => onSubmit(timeString));
        }}
        as="button"
        className="w-full p-2 bg-primary-lg text-white"
      >
        선택
      </Badge>
    </Flex>
  );
};
