"use client";

import { generateClassName } from "@/feature/common/utils";
import { PanInfo, motion, useAnimation } from "framer-motion";
import { createContext, useContext, useEffect } from "react";

type DragEvent = MouseEvent | TouchEvent | PointerEvent;

interface BottomSheetProps {
  isOpen: boolean;
  close: () => unknown;
  children: React.ReactNode;
  height?: string;
}

const BottomSheetContext = createContext<{ close: () => unknown }>({ close: () => {} });

export const useBottomSheetContext = () => {
  const { close } = useContext(BottomSheetContext);

  if (!close) {
    throw new Error("useBottomSheetContext must be used within BottomSheetWapper");
  }

  return { close };
};

const BottomSheetCloseTrigger = ({ children }: { children: React.ReactNode }) => {
  const { close } = useBottomSheetContext();
  return <button onClick={() => close()}>{children}</button>;
};

export const BottomSheetWapper = ({
  isOpen,
  close,
  children,
  height = "90%",
}: BottomSheetProps) => {
  const controls = useAnimation();

  const closeEndAnimation = () => controls.start("closed").then(() => close());

  const onDragEnd = (event: DragEvent, info: PanInfo) => {
    const shouldClose = info.point.y > window.innerHeight * 0.7;

    if (shouldClose) {
      closeEndAnimation();
    } else {
      controls.start("visible");
    }
  };

  useEffect(() => {
    if (isOpen) {
      controls.start("visible");
    } else {
      controls.start("closed");
    }
  }, [isOpen, controls]);

  const css = generateClassName(
    `absolute  bottom-0 left-0 w-full  bg-white z-50 overflow-hidden rounded-t-xl border-t-2`
  );

  return (
    isOpen && (
      <BottomSheetContext.Provider value={{ close: closeEndAnimation }}>
        <motion.div
          className="w-full h-full absolute top-0 left-0 z-50"
          initial="open"
          animate={controls}
          variants={{
            open: { backgroundColor: "rgba(0, 0, 0, 0.5)", opacity: 1 },
            closed: { opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
          }}
        >
          <motion.div
            drag="y"
            onDragEnd={onDragEnd}
            initial="closed"
            animate={controls}
            transition={{
              type: "spring",
              damping: 40,
              stiffness: 400,
            }}
            variants={{
              visible: { y: "0%" },
              closed: { y: "100%" },
            }}
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            className={css}
            style={{ boxShadow: "0px -4px 10px -3px rgba(0,0,0,0.15)", height: height }}
          >
            <div className="flex justify-center items-center w-full h-2 m-2">
              <div className="w-[30%] h-full bg-gray-300 rounded-lg cursor-row-resize" />
            </div>
            {children}
          </motion.div>
        </motion.div>
      </BottomSheetContext.Provider>
    )
  );
};
