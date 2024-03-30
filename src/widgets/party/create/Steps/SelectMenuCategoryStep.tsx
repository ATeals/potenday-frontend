import { useOverlay } from "@/feature/common/hooks";
import { BottomSheetWapper } from "@UI/BottomSheetWapper";
import { useEffect, useState } from "react";
import { PartyMenuCategoryPicker } from "../Input";
import { useFormContext } from "react-hook-form";
import { PartyStepsWapper } from "./PartyStepsWapper";
import { Heading } from "@UI/Heading";
import { Flex } from "@UI/Flex";
import { Text } from "@UI/Text";
import { SpoonSVG } from "@/feature/Svgs";

export const SelectMenuCategoryStep = ({ nextStep }: { nextStep: () => void }) => {
  const { setValue, watch } = useFormContext();

  const { open, close } = useOverlay();

  const category = watch("category");

  const openMenuCategoryInput = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <PartyMenuCategoryPicker onSubmit={(category) => setValue("category", category)} />
      </BottomSheetWapper>
    ));

  useEffect(() => {
    if (!category) openMenuCategoryInput();
  }, []);

  return (
    <PartyStepsWapper onSumbit={nextStep}>
      <Heading size="lg" className="">
        <span className="text-primary-lg">어떤 음식</span>
        <span>을 먹을까요?</span>
      </Heading>

      <Flex
        className="w-full h-full p-10 "
        style={{ direction: "column", justify: "start", align: "start", gap: 40 }}
      >
        <Flex
          onClick={() => openMenuCategoryInput()}
          style={{ direction: "column", justify: "start", align: "start", gap: 10 }}
          className="w-full hover:cursor-pointer"
        >
          <Text className="text-gray-500">음식</Text>
          <Flex style={{ gap: 10 }}>
            <SpoonSVG className="fill-primary-lg w-4 h-4" />
            {category && <Text className="text-gray-500">{category}</Text>}
          </Flex>
        </Flex>
      </Flex>
    </PartyStepsWapper>
  );
};
