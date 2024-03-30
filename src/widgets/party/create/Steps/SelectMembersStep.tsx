import { BottomSheetWapper } from "@UI/BottomSheetWapper";
import { PartyMembersPicker } from "../Input";
import { useFormContext } from "react-hook-form";
import { useOverlay } from "@/feature/common/hooks";
import { PartyStepsWapper } from "./PartyStepsWapper";
import { Heading } from "@UI/Heading";
import { Flex } from "@UI/Flex";
import { Text } from "@UI/Text";
import { PeopleSVG } from "@/feature/Svgs";
import { useEffect } from "react";

export const SelectMembersStep = ({ nextStep }: { nextStep: () => unknown }) => {
  const { open, close } = useOverlay();

  const { setValue, watch } = useFormContext();

  const members = watch("members");

  const openPartyLocationInput = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <PartyMembersPicker
          onSubmit={(members) => {
            setValue("members", members);
          }}
        />
      </BottomSheetWapper>
    ));

  useEffect(() => {
    if (!members) openPartyLocationInput();
  }, []);

  return (
    <PartyStepsWapper onSumbit={nextStep}>
      <Heading size="lg" className="">
        <span className="text-primary-lg">몇명이</span>
        <span> 모일까요?</span>
      </Heading>

      <Flex
        className="w-full h-full p-10 "
        style={{ direction: "column", justify: "start", align: "start", gap: 40 }}
      >
        <Flex
          onClick={() => openPartyLocationInput()}
          style={{ direction: "column", justify: "start", align: "start", gap: 10 }}
          className="w-full hover:cursor-pointer"
        >
          <Text className="text-gray-500">인원</Text>
          <Flex style={{ gap: 10 }}>
            <PeopleSVG className="fill-primary-lg w-4 h-4" />
            {members && <Text className="text-gray-500">{members}</Text>}
          </Flex>
        </Flex>
      </Flex>
    </PartyStepsWapper>
  );
};
