import { Text, Heading, Flex, Badge, Box } from "@UI/index";

export const PartyList = () => {
  return (
    <Flex as="section" style={{ direction: "column" }} className="my-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Flex
            key={i}
            style={{ justify: "space-between" }}
            className="rounded-lg shadow-lg drop-shadow-xl w-full h-[150px]  p-2 my-[0.125rem] bg-white"
          >
            <div className="w-[25%] bg-gray-300 h-full rounded-lg" />
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

              <Heading size="sm">자린고비 🐟 점심값 아끼기 도시락 팟 ! 🍱</Heading>
              <Text size="sm" className="text-gray-500">
                3월 25일 (월) 13:00
              </Text>
              <Text size="sm" className="text-gray-500">
                📍 3층 4 세미나실
              </Text>

              <Flex>
                <Box size="sm" className="rounded-[50%] mx-[-5px] bg-primary-sm"></Box>
                <Box size="sm" className="rounded-[50%] mx-[-5px] bg-primary-lg"></Box>
                <Box size="sm" className="rounded-[50%] mx-[-5px] bg-secondary-md"></Box>
                <Box size="sm" className="rounded-[50%] mx-[-5px] bg-secondary-black"></Box>
              </Flex>
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};
