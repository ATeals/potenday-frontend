"use client";

import { CalendarSVG, LocationSVG, PeopleSVG } from "@/feature/Svgs";
import { useAuthUserQuery } from "@/feature/auth/api/query";
import { usePartyJoinMutation, usePartyQuery } from "@/feature/party/api/queries";
import { Badge } from "@UI/Badge";
import { Box } from "@UI/Box";
import { Flex } from "@UI/Flex";
import { Heading } from "@UI/Heading";
import { Text } from "@UI/Text";
import { Icon } from "@UI/icon";
import { useRouter } from "next/navigation";
import { Container as MapSuspense, NaverMap, useMap, useNavermaps } from "react-naver-maps";

const PartyDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  return <PartyDetail id={Number(id)} />;
};

export default PartyDetailPage;

const PartyDetail = ({ id }: { id: number }) => {
  const router = useRouter();

  const user = useAuthUserQuery();

  const { data: party } = usePartyQuery(id, user!.channelId);

  const { mutate } = usePartyJoinMutation(user!.channelId, {
    onSuccess: (res) => {
      alert("참여 신청이 완료되었습니다.");
    },
    onError: () => alert("이미 참여한 파티가 있습니다."),
  });

  const { title, date, time, location, headcount, nowCount, description } = party;

  return (
    <>
      <Box className="w-full h-[150px] relative bg-gray-400 bg-opacity-70 overflow-visible mb-16">
        <Flex
          style={{ justify: "space-between" }}
          className="p-5 absolute w-full top-0 left-0  text-gray-100"
        >
          <Text onClick={() => router.back()} size="lg" className="w-[30%]">
            &larr;
          </Text>
          <Text size="lg"></Text>
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

      <Flex
        style={{ direction: "column", justify: "space-between", gap: 20 }}
        className="px-5 pb-5"
      >
        <Heading size="lg">{title}</Heading>

        <Flex style={{ gap: 20 }}>
          <Flex style={{ gap: 2 }}>
            <CalendarSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              {date} | {time}
            </Text>
          </Flex>

          <Flex style={{ gap: 2 }}>
            <LocationSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              {location.title}
            </Text>
          </Flex>

          <Flex style={{ gap: 2 }}>
            <PeopleSVG className="fill-primary-lg w-4 h-4" />
            <Text size="sm" className="whitespace-pre-wrap text-gray-500">
              {nowCount} / {headcount}
            </Text>
          </Flex>
        </Flex>

        <Text as="pre" className="w-full h-1/2">
          {description}
        </Text>

        <Flex className="w-full min-h-10" style={{ justify: "start", gap: 10 }}>
          <LocationSVG className="fill-primary-lg w-4 h-4" />
          <Text size="sm" className="whitespace-pre-wrap text-gray-500">
            {location.address}
          </Text>
        </Flex>
        <MapSuspense className="w-full h-[200px]" fallback={<Box className="w-full h-[200px" />}>
          <Map mapx={location.mapx} mapy={location.mapy} />
        </MapSuspense>
      </Flex>

      <Badge
        onClick={() => {
          mutate(user.userId);
        }}
        as="button"
        className="w-[90%] p-2 mx-2  bg-primary-lg text-white"
      >
        참여 신청하기
      </Badge>
    </>
  );
};

const Map = ({ mapx, mapy }: { mapx: number; mapy: number }) => {
  const navermaps = useNavermaps();

  const point = new navermaps.Point(1270352532, 374947499);

  return <NaverMap defaultZoom={10} center={new navermaps.Point(point)} />;
};
