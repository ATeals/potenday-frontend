import { useOverlay } from "@/feature/common/hooks";
import { BottomSheetWapper } from "@UI/BottomSheetWapper";
import { useFormContext } from "react-hook-form";
import { PartyNameInput } from "../Input";
import { PartyStepsWapper } from "./PartyStepsWapper";
import { Heading } from "@UI/Heading";
import { Flex } from "@UI/Flex";
import { Text } from "@UI/Text";
import { useEffect } from "react";

export const PartyNameStep = ({ nextStep }: { nextStep: () => unknown }) => {
  const { open, close } = useOverlay();
  const { setValue, watch } = useFormContext();

  const title = watch("title");

  const openNameInput = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <PartyNameInput onSubmit={(title) => setValue("title", title)} />
      </BottomSheetWapper>
    ));

  useEffect(() => {
    if (!title) openNameInput();
  }, [title]);

  return (
    <PartyStepsWapper onSumbit={nextStep}>
      <Heading size="lg" className="">
        <span className="text-primary-lg">파티 이름</span>
        <span>을 정해주세요</span>
      </Heading>

      <Flex
        className="w-full h-full p-10 "
        style={{ direction: "column", justify: "start", align: "start", gap: 40 }}
      >
        <Flex
          onClick={() => openNameInput()}
          style={{ direction: "column", justify: "start", align: "start", gap: 10 }}
          className="w-full hover:cursor-pointer"
        >
          <Text className="text-gray-500">이름</Text>
          <Flex style={{ gap: 10 }}>{title && <Text className="text-gray-500">{title}</Text>}</Flex>
        </Flex>
      </Flex>
    </PartyStepsWapper>
  );
};
