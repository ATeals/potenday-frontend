import { LocationSVG } from "@/feature/Svgs";
import { DividerLine } from "@UI/DividerLine";
import { Flex } from "@UI/Flex";
import { Text } from "@UI/Text";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MapAPI } from "../api";
import { useEffect } from "react";
import { SearchLocationValue } from "../types";

const useSearchLocation = (keyword: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [{ scope: "searchLocation", keyword }],
    queryFn: async () => {
      const res = await MapAPI.search(keyword);

      return res?.data?.data.stores;
    },
  });

  const locations = data || [];

  return locations;
};

export const SearchLocationList = ({
  keyword,
  onClick,
}: {
  keyword: string;
  onClick: (location: SearchLocationValue) => unknown;
}) => {
  const locations = useSearchLocation(keyword);

  useEffect(() => {
    MapAPI.search(keyword).then((res) => {
      console.log(res.data.data.stores);
    });

    console.log(locations);
  }, [keyword]);

  return (
    <Flex
      className="w-full h-full"
      style={{ justify: "start", align: "start", direction: "column", gap: 10 }}
    >
      {locations.map((location) => (
        <div
          key={location.title}
          className="p-2 w-full cursor-pointer"
          onClick={() => onClick(location)}
        >
          <Flex style={{ justify: "start", gap: 20 }} className="m-2 w-full">
            <LocationSVG className="fill-gray-300" />
            <div className="w-full">
              <Flex className="w-[90%]" style={{ justify: "space-between" }}>
                <Text>{location.title}</Text>
                <Text className="text-gray-300">{location.category}</Text>
              </Flex>

              <Text className="">{location.address}</Text>
            </div>
          </Flex>
          <DividerLine />
        </div>
      ))}
    </Flex>
  );
};
