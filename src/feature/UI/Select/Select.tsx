import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateClassName } from "@/feature/common/utils";

type SelectOption<T> = {
  value: T;
  label: string;
};

type SelectProps<T> = {
  options: SelectOption<T>[];
  defaultOptions?: SelectOption<T>;
  plaseholder?: string;
  onSelect?: (option: SelectOption<T>) => void;
  maxOptionHeight?: number | string;
  className?: string;
};

export const Select = <T extends any>({
  options,
  onSelect,
  defaultOptions,
  plaseholder,
  maxOptionHeight = "20dvh",
  className,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption<T>>();
  const ref = useRef<HTMLDivElement>(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: SelectOption<T>) => () => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  const css = generateClassName(
    "w-full h-10 p-3 flex justify-center items-center border rounded-lg focus:outline-none",
    className
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="w-full" ref={ref}>
      <div className="relative">
        <button onClick={toggling} className={css}>
          {selectedOption?.label || defaultOptions?.label || plaseholder}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 z-10 mt-2 w-full bg-white border rounded-md shadow-lg overflow-auto"
              style={{ maxHeight: maxOptionHeight }}
            >
              <div className="py-1 text-center leading-6 shadow-xs">
                {options.map((option) => (
                  <div
                    onClick={onOptionClicked(option)}
                    className="px-5 py-1 hover:bg-blue-500 hover:text-white cursor-pointer text-center"
                    key={option.label}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
