import { Box } from "@UI/Box";
import { DividerLine } from "@UI/DividerLine";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Text } from "@UI/Text";
import { Icon } from "@UI/icon";

const UserProfilePage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <Box className="w-full h-[250px] relative bg-gray-400 bg-opacity-70 overflow-visible mb-16">
        <Flex
          style={{ justify: "space-between" }}
          className="p-5 absolute w-full top-0 left-0  text-gray-100"
        >
          <Text size="lg" className="w-[30%]">
            &larr;
          </Text>
          <Text size="lg">프로필</Text>
          <Flex style={{ justify: "end" }} className="w-[30%]">
            <Icon icon="bookmark" />
            <Icon icon="bell" className="ml-2" />
          </Flex>
        </Flex>

        <Flex className="absolute rounded-[50%] w-[140px] h-[140px] bottom-[-2rem] z-30 bg-white shadow-xl">
          <img
            src="/images/ProfileDemo.png"
            alt="profileImg"
            className="object-contain w-[90%] h-[90%]"
          />
        </Flex>
      </Box>

      <Flex style={{ direction: "column", justify: "space-between", gap: 20 }} className="px-10">
        <Heading size="lg">태평동 먹짱</Heading>
        <Text size="sm" className="whitespace-pre-wrap text-gray-500">
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바.
        </Text>
      </Flex>

      <DividerLine className="my-5" />

      <section>
        <Text size="lg" className="px-5">
          <span className="font-bold">태평동 먹짱</span>님의 모임
        </Text>

        <Flex
          style={{ justify: "start" }}
          className="snap-x snap-mandatory overflow-scroll w-full h-[350px] p-5"
        >
          <div className="w-2/4 flex-shrink-0"></div>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Box
                key={i}
                className="h-full snap-center snap-always w-3/5 ml-5 flex-shrink-0 rounded-lg overflow-hidden p-3"
              >
                <Flex style={{ direction: "column", justify: "start", align: "start" }}>
                  <article className="my-5">
                    <Text>겸둥 지은</Text>
                    <Heading size="lg">점심에 즐기는 유학생활 🌴</Heading>
                  </article>

                  <article className="my-5">
                    <Text size="sm" className="text-gray-500">
                      3월 25일 (월) 13:00
                    </Text>
                    <Text size="sm" className="text-gray-500">
                      📍 갓잇 강남점
                    </Text>
                  </article>

                  <Flex style={{ gap: 5 }} className="text-gray-500">
                    <Icon icon="people-fill" />
                    <Text>4 / 6</Text>
                  </Flex>

                  <Flex className="">
                    <Box size="sm" className="rounded-[50%] mx-[-5px] bg-primary-md"></Box>
                    <Box size="sm" className="rounded-[50%] mx-[-5px] bg-secondary-md"></Box>
                    <Box size="sm" className="rounded-[50%] mx-[-5px] bg-primary-lg"></Box>
                    <Box size="sm" className="rounded-[50%] mx-[-5px] bg-secondary-black"></Box>
                  </Flex>
                </Flex>
              </Box>
            ))}
          <div className="w-2/4 flex-shrink-0"></div>
        </Flex>
      </section>
    </>
  );
};

export default UserProfilePage;
