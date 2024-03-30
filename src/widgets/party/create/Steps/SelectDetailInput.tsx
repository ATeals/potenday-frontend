import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { PartyStepsWapper } from "./PartyStepsWapper";
import { Heading } from "@UI/Heading";
import { Flex } from "@UI/Flex";
import { CameraSVG } from "@/feature/Svgs/CameraSVG";
import { Box } from "@UI/Box";
import { Input } from "@UI/Input";

export const SelectDetailInput = ({ nextStep }: { nextStep: () => unknown }) => {
  const { setValue, watch } = useFormContext();

  const [titleInput, setTitleInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState<string>("");

  return (
    <PartyStepsWapper
      onSumbit={() => {
        setValue("title", titleInput);
        setValue("description", descriptionInput);
        nextStep();
      }}
    >
      <Heading size="lg" className="">
        <span className="text-primary-lg">상세설명을</span>
        <span> 입력해주세요!</span>
      </Heading>

      <Flex
        className="w-full h-full p-5 pt-10"
        style={{ direction: "column", justify: "start", align: "start", gap: 40 }}
      >
        <Flex
          style={{ direction: "column", justify: "start", align: "start", gap: 10 }}
          className="w-full h-full hover:cursor-pointer"
        >
          <CameraSVG className="w-10 h-10" />
          <Input
            className="w-full"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <Box
            variant="outline"
            as="textarea"
            name="description"
            className="w-full h-[60%] rounded-lg resize-none p-2"
            placeholder="소개글을 입력해주세요. (선택)"
            value={descriptionInput}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescriptionInput(e.target.value)
            }
          />
        </Flex>
      </Flex>
    </PartyStepsWapper>
  );
};
