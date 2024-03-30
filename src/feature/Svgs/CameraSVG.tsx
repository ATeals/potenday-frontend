import { SVGProps } from "./SVG";

export const CameraSVG = ({ ...props }: SVGProps) => {
  return (
    <svg
      width="94"
      height="84"
      viewBox="0 0 94 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="42" cy="42" r="40" stroke="#B8B8B8" strokeWidth="4" />
      <path
        d="M35.5 24.5L31 30C23.4 28.4 19.1667 31.6667 18 33.5V55.5C19.2 58.7 22.5 59.8333 24 60H52C52.4 51.2 61.1667 45.3333 65.5 43.5V33.5C65.5 30.7 62.8333 30 61.5 30H54.5L48.5 24.5H35.5Z"
        fill="#B8B8B8"
      />
      <circle cx="42" cy="44" r="9" fill="#D9D9D9" stroke="white" strokeWidth="4" />
      <circle cx="54" cy="35" r="2" fill="white" />
      <circle cx="76" cy="66" r="18" fill="#B8B8B8" />
      <rect x="67.6001" y="64.8" width="16.8" height="2.4" fill="white" />
      <rect
        x="74.8"
        y="74.4"
        width="16.8"
        height="2.4"
        transform="rotate(-90 74.8 74.4)"
        fill="white"
      />
    </svg>
  );
};
