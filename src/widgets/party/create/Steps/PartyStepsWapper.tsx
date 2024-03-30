import { Badge } from "@UI/Badge";
import { Box } from "@UI/Box";
import { Flex } from "@UI/Flex";

export const PartyStepsWapper = ({
  children,
  onSumbit,
  triggerLable = "다음",
}: {
  children: React.ReactNode;
  onSumbit: () => unknown;
  triggerLable?: string;
}) => (
  <>
    <Flex
      as={Box}
      style={{ direction: "column", justify: "start", gap: 5 }}
      variant="outline"
      className="rounded-lg shadow-lg py-5 w-full h-[95%]"
    >
      {children}
    </Flex>
    <Badge as="button" onClick={() => onSumbit()} className="w-full p-2 bg-primary-lg text-white">
      {triggerLable}
    </Badge>
  </>
);
