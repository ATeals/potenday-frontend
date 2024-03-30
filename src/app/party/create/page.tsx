"use client";

import { useFunnel } from "@/feature/common/hooks";
import { ProgressBar } from "@UI/ProgressBar";
import { Flex } from "@UI/Flex";
import { FormProvider, useForm } from "react-hook-form";
import { FOOD_CATEGORIES } from "@/widgets/party/create/Input/PartyMenuCategoryPicker";

import {
  PartyCreateClearStep,
  PartyNameStep,
  SelectDetailInput,
  SelectLocationStep,
  SelectMembersStep,
  SelectMenuCategoryStep,
  SelectPartyDateStep,
} from "@/widgets/party/create/Steps";

const PARTY_STEPS = [
  "이름선택",
  "날짜선택",
  "음식선택",
  "장소선택",
  "인원선택",
  "상세설명입력",
  "완료",
] as const;

interface CreatPartyForm {
  title: string;
  date: Date;
  time: string;
  foodCategory: (typeof FOOD_CATEGORIES)[number]["name"];
  location: string;
  members: number;
  description: string;
}

const PartyMainPage = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(PARTY_STEPS);

  const method = useForm<CreatPartyForm>();

  const max = PARTY_STEPS.length - 1;
  const current = PARTY_STEPS.indexOf(currentStep);

  return (
    <FormProvider {...method}>
      <Flex
        className="p-10 h-full"
        style={{ direction: "column", gap: 10, justify: "space-between" }}
      >
        <ProgressBar current={current} max={max} barStyle="bg-primary-lg" />
        <Funnel>
          <Step name="이름선택">
            <PartyNameStep nextStep={() => setStep("날짜선택")} />
          </Step>

          <Step name="날짜선택">
            <SelectPartyDateStep nextStep={() => setStep("음식선택")} />
          </Step>

          <Step name="음식선택">
            <SelectMenuCategoryStep nextStep={() => setStep("장소선택")} />
          </Step>

          <Step name="장소선택">
            <SelectLocationStep nextStep={() => setStep("인원선택")} />
          </Step>

          <Step name="인원선택">
            <SelectMembersStep nextStep={() => setStep("상세설명입력")} />
          </Step>

          <Step name="상세설명입력">
            <SelectDetailInput nextStep={() => setStep("완료")} />
          </Step>

          <Step name="완료">
            <PartyCreateClearStep onSubmit={() => alert("완료")} />
          </Step>
        </Funnel>
      </Flex>
    </FormProvider>
  );
};

export default PartyMainPage;
