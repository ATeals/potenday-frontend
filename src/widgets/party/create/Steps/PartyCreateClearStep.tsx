import { useFormContext } from "react-hook-form";
import { PartyStepsWapper } from "./PartyStepsWapper";
import { Heading } from "@UI/Heading";
import { Flex } from "@UI/Flex";
import { CalendarSVG, LocationSVG, PeopleSVG } from "@/feature/Svgs";
import { Text } from "@UI/Text";
import { formatDate } from "@/feature/common/utils";

export const PartyCreateClearStep = ({ onSubmit }: { onSubmit: () => unknown }) => {
  const { watch } = useFormContext();

  const [title, date, time, foodCategory, location, members, description] = watch([
    "title",
    "date",
    "time",
    "foodCategory",
    "location",
    "members",
    "description",
  ]);

  return (
    <PartyStepsWapper triggerLable="완료" onSumbit={() => {}}>
      <Heading size="lg" className="">
        <span className="text-primary-lg">모임설정을</span>
        <span> 확인해 주세요!</span>
      </Heading>

      <Flex
        className="w-full h-full py-5"
        style={{ direction: "column", justify: "start", flexWrap: "wrap", gap: 20 }}
      >
        <Heading className="m-2">{title}</Heading>

        <Flex style={{ gap: 20, flexWrap: "wrap", justify: "start" }} className="p-5">
          <Flex style={{ gap: 2 }}>
            <CalendarSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              {formatDate(date, "YYYY년 MM월 DD일")} {time}
            </Text>
          </Flex>

          <Flex style={{ gap: 2 }}>
            <PeopleSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              {members}명
            </Text>
          </Flex>

          <Flex style={{ gap: 2 }}>
            <LocationSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              {location}
            </Text>
          </Flex>
        </Flex>

        <Flex style={{ justify: "start" }} className="w-full p-5">
          <Text as="pre" className="text-gray-500">
            {description}
          </Text>
        </Flex>
      </Flex>
    </PartyStepsWapper>
  );
};
