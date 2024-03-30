import { SVGProps } from "./SVG";

export const AddPartySVG = ({ ...props }: SVGProps) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      className={props.className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_182_2995)">
        <circle cx="22" cy="18" r="18" fill={props.fill || "#D9D9D9"} />
        <rect x="10.5" y="16.5" width="24" height="2" fill="white" />
        <rect
          x="21.5"
          y="30.5"
          width="24"
          height="2"
          transform="rotate(-90 21.5 30.5)"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_182_2995"
          x="0"
          y="0"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_182_2995" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_182_2995"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
