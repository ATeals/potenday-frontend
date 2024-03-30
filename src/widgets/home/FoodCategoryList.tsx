import { Box } from "@UI/Box";
import { Flex } from "@UI/Flex";
import { Text } from "@UI/Text";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const FoodCategoryList = () => {
  const constraintsRef = useRef(null);

  return (
    <section ref={constraintsRef} className="overflow-scroll">
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        className="inline-flex p-3 py-5"
        style={{ gap: 10, justifyContent: "start", flexWrap: "nowrap" }}
      >
        {FOOD_CATEGORIES.map(({ name, iconURL }, i) => (
          <Flex
            as={Box}
            key={name}
            style={{ direction: "column", justify: "space-around" }}
            className="cursor-pointer shadow-lg rounded-2xl flex-shrink-0"
            size="md"
          >
            {name !== "전체" ? (
              <Image src={iconURL} alt={name} width={30} height={30} />
            ) : (
              <div className="p-4"></div>
            )}
            <Text size="sm">{name}</Text>
          </Flex>
        ))}
      </motion.div>
    </section>
  );
};

const FOOD_CATEGORIES = [
  {
    name: "전체",
    iconURL: "",
  },
  {
    name: "한식",
    iconURL: "/icons/foodCategory/korean_food.png",
  },
  {
    name: "양식",
    iconURL: "/icons/foodCategory/western_food.png",
  },
  {
    name: "일식",
    iconURL: "/icons/foodCategory/japanese_food.png",
  },
  {
    name: "중식",
    iconURL: "/icons/foodCategory/chinese_food.png",
  },
  {
    name: "분식",
    iconURL: "/icons/foodCategory/school_food.png",
  },
  {
    name: "간편식",
    iconURL: "/icons/foodCategory/convenience_food.png",
  },
];
