"use client";

import { useFunnel } from "@/feature/common/hooks";
import { ProgressBar } from "@UI/ProgressBar";
import { Flex } from "@UI/Flex";
import { FormProvider, useForm } from "react-hook-form";
import { FOOD_CATEGORIES } from "@/widgets/party/create/Input/PartyMenuCategoryPicker";

import {
  PartyCreateClearStep,
  SelectDetailInput,
  SelectLocationStep,
  SelectMembersStep,
  SelectMenuCategoryStep,
  SelectPartyDateStep,
} from "@/widgets/party/create/Steps";

import { SearchLocationValue } from "@/feature/map/types";

import { formatDate } from "@/feature/common/utils";
import { usePartyCreateMutation } from "@/feature/party/api/queries";
import { useAuthUserQuery } from "@/feature/auth/api/query";
import { useRouter } from "next/navigation";

const PARTY_STEPS = [
  "날짜선택",
  "음식선택",
  "장소선택",
  "인원선택",
  "상세설명입력",
  "완료",
] as const;

export interface CreatPartyForm {
  title: string;
  date: Date;
  time: string;
  foodCategory: (typeof FOOD_CATEGORIES)[number]["id"];
  location: SearchLocationValue;
  members: number;
  description: string;
}

const PartyMainPage = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(PARTY_STEPS);

  const method = useForm<CreatPartyForm>();

  const max = PARTY_STEPS.length - 1;
  const current = PARTY_STEPS.indexOf(currentStep);

  const user = useAuthUserQuery();

  const router = useRouter();

  const { mutate } = usePartyCreateMutation(user.channelId, {
    onSuccess: (res) => {
      alert("모임 생성 완료!");
      router.push(`/party/${res.data.data.partyId}`);
    },
  });

  const handleSubmit = () => {
    const data = method.getValues();

    const req = {
      title: data.title,
      date: formatDate(data.date, "YYYY-MM-DD"),
      time: data.time,
      location: data.location,
      foodCategory: data.foodCategory,
      headcount: data.members,
      description: data.description,
    };

    mutate(req);
  };

  return (
    <FormProvider {...method}>
      <Flex
        className="p-10 h-full"
        style={{ direction: "column", gap: 10, justify: "space-between" }}
      >
        <ProgressBar current={current} max={max} barStyle="bg-primary-lg" />
        <Funnel>
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
            <PartyCreateClearStep onSubmit={handleSubmit} />
          </Step>
        </Funnel>
      </Flex>
    </FormProvider>
  );
};

export default PartyMainPage;
