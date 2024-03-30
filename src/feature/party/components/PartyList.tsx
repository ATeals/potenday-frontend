import { PeopleSVG } from "@/feature/Svgs";
import { Party } from "@/feature/party/api";
import { Text, Heading, Flex, Badge, Box } from "@UI/index";
import Link from "next/link";

export const PartyList = ({ parties }: { parties: Party[] }) => {
  return (
    <Flex as="section" style={{ direction: "column" }} className="my-4">
      {parties.map((party) => (
        <Link key={party.partyId} href={`/party/${party.partyId}`} className="w-full">
          <Flex
            style={{ justify: "space-between" }}
            className="rounded-lg shadow-lg drop-shadow-xl w-full h-[150px] p-2 my-[0.125rem] bg-white hover:scale-105 overflow-hidden"
          >
            <div className="h-full w-[30%]">
              <img src="/images/maskGroup.png" alt="img" className="object-cover w-full h-full" />
            </div>

            <Flex
              style={{ direction: "column", align: "start", justify: "start", gap: 5 }}
              className="h-full w-[75%] p-2"
            >
              <Flex style={{ gap: 5 }}>
                <Badge className=" whitespace-nowrap">
                  <Text size="sm">🔥 실시간 인기 파티</Text>
                </Badge>
                <Badge className=" whitespace-nowrap">
                  <Text size="sm">구내 식당</Text>
                </Badge>
              </Flex>

              <Heading size="sm">{party.title}</Heading>
              <Text size="sm" className="text-gray-500">
                {party.date} {party.time}
              </Text>
              <Text size="sm" className="text-gray-500 whitespace-nowrap overflow-scroll min-h-5">
                {party.location.title} {party.location.roadAddress}
              </Text>

              <Flex style={{ gap: 5, justify: "space-between" }} className="w-full">
                <Flex>
                  <Box size="sm" className="rounded-[50%] mx-[-5px] bg-primary-sm"></Box>
                  <Box size="sm" className="rounded-[50%] mx-[-5px] bg-primary-lg"></Box>
                  <Box size="sm" className="rounded-[50%] mx-[-5px] bg-secondary-md"></Box>
                  <Box size="sm" className="rounded-[50%] mx-[-5px] bg-secondary-black"></Box>
                </Flex>

                <Flex>
                  <PeopleSVG className="fill-gray-300 w-5 h-5" />
                  <Text size="sm" className="text-gray-500 ml-2">
                    {party.nowCount} / {party.headcount}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};
