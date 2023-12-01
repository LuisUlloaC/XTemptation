import * as React from "react"
const HeartIcon = ({fillColor}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={25}
    fill="none"
  >
    <path
      stroke="#B3B3B3"
      strokeLinecap="round"
      strokeWidth={2.5}
      fill={fillColor}
      d="M13.955 5.389c5.55-9.393 23.481 2.135 0 17.505M13.783 5.389c-5.55-9.393-23.482 2.134 0 17.505"
    />
  </svg>
)
export default HeartIcon