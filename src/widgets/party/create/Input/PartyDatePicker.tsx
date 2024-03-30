"use client";

import { formatDate } from "@/feature/common/utils";
import { useBottomSheetContext } from "@UI/BottomSheetWapper/BottomSheetWapper";
import { Flex, Heading, Badge } from "@UI/index";
import { useState } from "react";
import Calendar from "react-calendar";

import "@/styles/calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const PartyDatePicker = ({
  defaultDate = new Date(),
  onSubmit,
}: {
  defaultDate?: Date;
  onSubmit: (date: Date) => void;
}) => {
  const [date, setDate] = useState<Value>(defaultDate);

  const dateLabel = formatDate(date as Date, "YYYY년 MM월 DD일");

  const { close } = useBottomSheetContext();

  return (
    <Flex
      style={{ direction: "column", justify: "space-between", gap: 10 }}
      className="p-10 h-full"
    >
      <Calendar
        value={date}
        onChange={(value) => {
          setDate(value);
        }}
        formatDay={(locale, date) => formatDate(date, "DD")}
        calendarType="gregory"
      />
      <Heading className="text-center">{dateLabel}</Heading>
      <Badge
        onClick={() => {
          close().then(() => onSubmit(date as Date));
        }}
        as="button"
        className="w-full p-2 bg-primary-lg text-white"
      >
        선택
      </Badge>
    </Flex>
  );
};
