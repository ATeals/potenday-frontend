import { motion } from "framer-motion";
import { SPRING_OPTIONS } from "./const";

export const SlideWapper = ({ children }: { index: number; children: React.ReactNode }) => {
  return (
    <motion.div transition={SPRING_OPTIONS} className="w-full h-full shrink-0 object-cover ">
      {children}
    </motion.div>
  );
};
