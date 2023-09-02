import type { SVGProps } from "react";
const SvgArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m13.28 5.969-4.346 4.346a1.324 1.324 0 0 1-1.867 0L2.721 5.97"
    />
  </svg>
);
export default SvgArrowDownIcon;
