import { useOverlay } from "@/feature/common/hooks";
import { BottomSheetWapper } from "@UI/BottomSheetWapper";
import { useFormContext } from "react-hook-form";
import { PartyDatePicker, PartyTimePicker } from "../Input";
import { useEffect } from "react";
import { PartyStepsWapper } from "./PartyStepsWapper";
import { Heading } from "@UI/Heading";
import { Flex } from "@UI/Flex";
import { Text } from "@UI/Text";
import { CalendarSVG } from "@/feature/Svgs";
import { formatDate } from "@/feature/common/utils";

export const SelectPartyDateStep = ({ nextStep }: { nextStep: () => unknown }) => {
  const { open, close } = useOverlay();
  const { setValue, watch } = useFormContext();

  const date = watch("date");
  const time = watch("time");

  const openDatePicker = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <PartyDatePicker
          defaultDate={date}
          onSubmit={(date) => {
            setValue("date", date);
          }}
        />
      </BottomSheetWapper>
    ));

  const openTimePicker = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <PartyTimePicker
          defaultTime={time}
          onSubmit={(time) => {
            setValue("time", time);
          }}
        />
      </BottomSheetWapper>
    ));

  useEffect(() => {
    if (!date) openDatePicker();
    else if (!time) openTimePicker();
  }, [date, time]);

  return (
    <PartyStepsWapper onSumbit={nextStep}>
      <Heading size="lg" className="">
        <span className="text-primary-lg">언제</span>
        <span> 모일까요?</span>
      </Heading>

      <Flex
        className="w-full h-full p-10 "
        style={{ direction: "column", justify: "start", align: "start", gap: 40 }}
      >
        <Flex
          onClick={() => openDatePicker()}
          style={{ direction: "column", justify: "start", align: "start", gap: 10 }}
          className="w-full hover:cursor-pointer"
        >
          <Text className="text-gray-500">날짜</Text>
          <Flex style={{ gap: 10 }}>
            <CalendarSVG className="fill-primary-lg w-4 h-4" />
            {date && <Text className="text-gray-500">{formatDate(date, "YYYY년 MM월 DD일")}</Text>}
            {time && <Text className="text-gray-500">{time}</Text>}
          </Flex>
        </Flex>
      </Flex>
    </PartyStepsWapper>
  );
};
