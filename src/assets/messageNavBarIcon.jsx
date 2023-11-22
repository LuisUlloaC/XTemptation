import * as React from "react"
const MessageNavBarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={50}
        height={49}
        x={-11}
        y={-4}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M38.843-3.458h-49v48h49v-48Z" />
      </mask>
      <g mask="url(#b)">
        <mask
          id="c"
          width={1923}
          height={1105}
          x={-49}
          y={-446}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path
            fill="#fff"
            stroke="#79236A"
            strokeWidth={2.135}
            d="M1872.84-444.458H-47.156v1102H1872.84v-1102Z"
          />
        </mask>
        <g mask="url(#c)">
          <path
            stroke="#79236A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.135}
            d="M29.337 9.068h4.038c1.072 0 2.099.421 2.856 1.171a3.98 3.98 0 0 1 1.183 2.829v12a3.98 3.98 0 0 1-1.183 2.828 4.058 4.058 0 0 1-2.856 1.172h-4.038v8l-8.077-8h-8.077a4.061 4.061 0 0 1-2.855-1.172m0 0 6.894-6.828h8.076a4.058 4.058 0 0 0 2.856-1.172 3.98 3.98 0 0 0 1.183-2.828v-12a3.98 3.98 0 0 0-1.183-2.829A4.058 4.058 0 0 0 25.3 1.068H5.105a4.058 4.058 0 0 0-2.855 1.171 3.98 3.98 0 0 0-1.183 2.829v12a3.98 3.98 0 0 0 1.183 2.828 4.058 4.058 0 0 0 2.855 1.172h4.039v8l1.183-1.172Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h38.482v38.135H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default MessageNavBarIcon