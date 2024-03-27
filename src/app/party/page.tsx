"use client";

import { useFunnel, useOverlay } from "@/feature/common/hooks";
import { formatDate } from "@/feature/common/utils";
import { BottomSheetWapper } from "@UI/BottomSheetWapper";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";

import "@/styles/calendar.css";
import { ProgressBar } from "@UI/ProgressBar";
import { Box } from "@UI/Box";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Badge } from "@UI/Badge";
import { useBottomSheetContext } from "@UI/BottomSheetWapper/BottomSheetWapper";
import { Input } from "@UI/Input";
import { Select } from "@UI/Select";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Page = () => {
  const { open, close } = useOverlay();

  const [date, setDate] = useState<Value>(new Date());

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <button
        onClick={() =>
          open(({ isOpen }) => (
            <BottomSheetWapper isOpen={isOpen} close={close}>
              <Calendar
                value={date}
                onChange={(...props) => console.log(props)}
                formatDay={(locale, date) => formatDate(date, "DD")}
                calendarType="gregory"
              />
            </BottomSheetWapper>
          ))
        }
      >
        파티 만들기
      </button>
    </>
  );
};

const PARTY_STEPS = ["이름선택", "날짜선택", "음식선택", "장소선택", "완료"] as const;

interface CreatPartyForm {
  name: string;
  date: Date;
  time: string;
  foodCategory: (typeof MENU_CATEGORIES)[number];
}

const PartyMainPage = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(PARTY_STEPS);

  const method = useForm<CreatPartyForm>();

  const max = PARTY_STEPS.length - 1;
  const current = PARTY_STEPS.indexOf(currentStep);

  useEffect(() => {
    console.log(method.watch());
  }, [method.watch()]);

  return (
    <FormProvider {...method}>
      <Flex
        className="p-10 h-full"
        style={{ direction: "column", gap: 10, justify: "space-between" }}
      >
        <ProgressBar current={current} max={max} />
        <Funnel>
          <Step name="이름선택">
            <EnterPartyNameStep nextStep={() => setStep("날짜선택")} />
          </Step>
          <Step name="날짜선택">
            <SelectPartyDateStep nextStep={() => setStep("음식선택")} />
          </Step>
          <Step name="음식선택">
            <SelectMenuCategoryStep nextStep={() => setStep("장소선택")} />
          </Step>
          <Step name="장소선택">
            <Box onClick={() => setStep("완료")} variant="outline" className="w-full h-full">
              장소선택
            </Box>
          </Step>

          <Step name="완료">
            <Box onClick={() => alert("성공")} variant="outline" className="w-full h-full">
              완료
            </Box>
          </Step>
        </Funnel>
      </Flex>
    </FormProvider>
  );
};

export default PartyMainPage;

const CalinderInput = ({
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
        className="w-full p-2 bg-gray-300"
      >
        선택
      </Badge>
    </Flex>
  );
};

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

const TimeInput = ({
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
        className="w-full p-2 bg-gray-300"
      >
        선택
      </Badge>
    </Flex>
  );
};

const PartyNameInput = ({ onSubmit }: { onSubmit: (name: string) => unknown }) => {
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
        className="w-full p-2 bg-gray-300"
      >
        선택
      </Badge>
    </Flex>
  );
};

const EnterPartyNameStep = ({ nextStep }: { nextStep: () => unknown }) => {
  const { open, close } = useOverlay();
  const { setValue, watch } = useFormContext();

  const name = watch("name");

  const openNameInput = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <PartyNameInput onSubmit={(name) => setValue("name", name)} />
      </BottomSheetWapper>
    ));

  return (
    <Flex
      as={Box}
      style={{ direction: "column", justify: "space-between", gap: 5 }}
      variant="outline"
      className="rounded-lg shadow-lg p-5 w-full h-full"
    >
      <Heading size="lg" className="">
        파티 이름을 정해주세요 🎉
      </Heading>

      <Badge as="button" onClick={() => openNameInput()} className="w-full p-2">
        {name || "파티 이름을 입력해주세요."}
      </Badge>

      <Badge as="button" onClick={() => nextStep()} className="w-full p-2 bg-gray-300">
        다음
      </Badge>
    </Flex>
  );
};

const SelectPartyDateStep = ({ nextStep }: { nextStep: () => unknown }) => {
  const { open, close } = useOverlay();
  const { setValue, watch } = useFormContext();

  const date = watch("date");
  const time = watch("time");

  const openDatePicker = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <CalinderInput
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
        <TimeInput
          defaultTime={time}
          onSubmit={(time) => {
            setValue("time", time);
          }}
        />
      </BottomSheetWapper>
    ));

  return (
    <Flex
      as={Box}
      style={{ direction: "column", justify: "space-between", gap: 5 }}
      variant="outline"
      className="rounded-lg shadow-lg p-5 w-full h-full"
    >
      <Heading size="lg" className="">
        언제 모일까요?
      </Heading>
      <Badge as="button" className="w-full p-2" onClick={() => openDatePicker()}>
        {(date instanceof Date && formatDate(date, "YYYY년 MM월 DD일")) || "날짜 선택"}
      </Badge>
      <Badge as="button" className="w-full p-2" onClick={() => openTimePicker()}>
        {time || "시간 선택"}
      </Badge>
      <Badge as="button" onClick={() => nextStep()} className="w-full p-2 bg-gray-300">
        다음
      </Badge>
    </Flex>
  );
};

const MENU_CATEGORIES = ["한식", "중식", "일식", "양식", "분식", "기타"] as const;

const SelectMenuCategoryStep = ({ nextStep }: { nextStep: () => void }) => {
  const [category, setcategory] = useState<string>("");

  const { open, close } = useOverlay();

  const openMenuCategoryInput = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <SelectMenuCategoryInput onSubmit={(category) => setcategory(category)} />
      </BottomSheetWapper>
    ));

  return (
    <Flex
      as={Box}
      style={{ direction: "column", justify: "space-between", gap: 5 }}
      variant="outline"
      className="rounded-lg shadow-lg p-5 w-full h-full"
    >
      <Heading size="lg" className="">
        메뉴는 무엇일까요?
      </Heading>
      <Badge as="button" className="w-full p-2" onClick={() => openMenuCategoryInput()}>
        {category || "음식 종류 선택"}
      </Badge>

      <Badge as="button" onClick={() => nextStep()} className="w-full p-2 bg-gray-300">
        다음
      </Badge>
    </Flex>
  );
};

const SelectMenuCategoryInput = ({ onSubmit }: { onSubmit: (name: string) => unknown }) => {
  const { close } = useBottomSheetContext();

  return (
    <Flex
      style={{ direction: "column", justify: "space-between", gap: 10 }}
      className="p-10 h-full"
    >
      <Flex style={{ flexWrap: "wrap", gap: 10 }}>
        {MENU_CATEGORIES.map((category) => (
          <Box
            size="xl"
            key={category}
            as="button"
            onClick={() => {
              close().then(() => onSubmit(category));
            }}
            className="p-2 bg-gray-300 rounded-lg"
          >
            {category}
          </Box>
        ))}
      </Flex>
      <Badge
        onClick={() => {
          close().then(() => onSubmit("기타"));
        }}
        as="button"
        className="w-full p-2 bg-gray-300"
      >
        선택
      </Badge>
    </Flex>
  );
};

const SetDeadlineStep = () => {};

const SelectLocationStep = () => {};

const SelectMealMethodStep = () => {};
