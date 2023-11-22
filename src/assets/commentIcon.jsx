import * as React from "react"
const CommentIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={26}
    fill="none"
    {...props}
  >
    <g stroke="#181818" clipPath="url(#a)">
      <path
        strokeWidth={1.957}
        d="M3.386.979h25.409c1.333 0 2.407.9 2.407 2.019v14.808c0 1.118-1.074 2.03-2.407 2.019-12.909-.107-7.877.149-12.909 4.712-4.587-4.503 0-4.787-12.5-4.712-1.334.008-2.407-.9-2.407-2.02V2.999c0-1.119 1.073-2.02 2.407-2.02Z"
      />
      <path strokeWidth={2.135} d="M20.233 6.612H4.732M4.999 12.94h6.815" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32.181v25.882H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default CommentIcon