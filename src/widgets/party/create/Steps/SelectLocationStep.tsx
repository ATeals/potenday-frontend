import { useOverlay } from "@/feature/common/hooks";
import { BottomSheetWapper } from "@UI/BottomSheetWapper";
import { useFormContext } from "react-hook-form";
import { PartyLocationInput } from "../Input";
import { PartyStepsWapper } from "./PartyStepsWapper";
import { Heading } from "@UI/Heading";
import { Flex } from "@UI/Flex";
import { LocationSVG } from "@/feature/Svgs";
import { Text } from "@UI/Text";
import { useEffect } from "react";

export const SelectLocationStep = ({ nextStep }: { nextStep: () => unknown }) => {
  const { open, close } = useOverlay();

  const { setValue, watch } = useFormContext();

  const location = watch("location");

  const openPartyLocationInput = () =>
    open(({ isOpen }) => (
      <BottomSheetWapper height="70%" isOpen={isOpen} close={close}>
        <PartyLocationInput
          onSubmit={(location) => {
            setValue("location", location);
          }}
        />
      </BottomSheetWapper>
    ));

  useEffect(() => {
    if (!location) openPartyLocationInput();
  }, [location]);

  return (
    <PartyStepsWapper onSumbit={nextStep}>
      <Heading size="lg" className="">
        <span className="text-primary-lg">어디서</span>
        <span> 먹을까요?</span>
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
          <Text className="text-gray-500">장소</Text>
          <Flex style={{ gap: 10 }}>
            <LocationSVG className="fill-primary-lg w-4 h-4" />
            {location && <Text className="text-gray-500">{location?.title}</Text>}
          </Flex>
        </Flex>
      </Flex>
    </PartyStepsWapper>
  );
};
