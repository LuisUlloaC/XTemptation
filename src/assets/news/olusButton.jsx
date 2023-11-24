import * as React from "react"
const PlusButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={42}
    fill="none"
    {...props}
  >
    <circle cx={19.153} cy={22} r={19} fill="#A20B9E" />
    <path
      fill="#fff"
      d="M17.426 29.41v-15h2.546v15h-2.546Zm-6.227-6.228v-2.546h15v2.546h-15Z"
    />
  </svg>
)
export default PlusButton
