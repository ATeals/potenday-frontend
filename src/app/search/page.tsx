import { Badge } from "@UI/Badge";
import { Flex } from "@UI/Flex";
import { Input } from "@UI/Input";
import { Text } from "@UI/Text";
import { Icon } from "@UI/icon";

const SearchPage = () => {
  return (
    <>
      <Flex as="section" className="py-5 px-3" style={{ gap: 20 }}>
        <Icon icon="arrow-bar-left"></Icon>
        <Input
          className="rounded-xl py-2"
          placeholder="관심사, 태그, 지역명을 검색해 보세요"
        ></Input>
      </Flex>

      <section className="py-3 px-3">
        <Text>최근 검색</Text>
        <Flex style={{ gap: 5, justify: "start" }} className="py-3">
          <Badge className="bg-gray-200 p-1 px-2">
            <Text as="span" className="mr-1">
              도시락
            </Text>
            <Icon size="sm" icon="x-circle-fill" className="text-gray-400" />
          </Badge>
        </Flex>
      </section>

      <section className="py-5 px-3">
        <Text>추천 검색어</Text>

        <Flex style={{ gap: 5, justify: "start", flexWrap: "wrap" }} className="py-3">
          <Badge className="bg-gray-200 p-1 px-2">
            <Text as="span" className="mr-1">
              🌸 봄 맞이 나들이
            </Text>
          </Badge>
          <Badge className="bg-gray-200 p-1 px-2">
            <Text as="span" className="mr-1">
              🧒🏻 점심시간에 유학을!
            </Text>
          </Badge>
          <Badge className="bg-gray-200 p-1 px-2">
            <Text as="span" className="mr-1">
              ⏳ 진행 임박 모임
            </Text>
          </Badge>
        </Flex>
      </section>
    </>
  );
};

export default SearchPage;
