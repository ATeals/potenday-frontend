import { SVGProps } from "./SVG";

export const ChatSVG = ({ ...props }: SVGProps) => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      className={props.className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.21738 19.6569L3.48295 14L7.50046 17.0738L2.21738 19.6569Z" />
      <path d="M21.4829 9C21.4829 13.9706 16.7819 18 10.9829 18C9.56658 18 8.21575 17.7596 6.98291 17.3239C5.65834 16.8558 4.46997 16.1621 3.48291 15.2987C1.62713 13.6754 0.48291 11.4522 0.48291 9C0.48291 4.02944 5.18392 0 10.9829 0C16.7819 0 21.4829 4.02944 21.4829 9Z" />
    </svg>
  );
};
