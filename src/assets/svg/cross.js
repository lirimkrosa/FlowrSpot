import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Cross(props) {
  return (
    <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M15.833 30c8.008 0 14.5-6.492 14.5-14.5S23.841 1 15.833 1s-14.5 6.492-14.5 14.5S7.825 30 15.833 30z"
        stroke="#EAA79E"
      />
      <Path
        clipRule="evenodd"
        d="M16.333 23a7 7 0 100-14 7 7 0 000 14z"
        stroke="#EAA79E"
      />
      <Path
        d="M6.333 16h20M16.333 6v20"
        stroke="#EAA79E"
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default Cross
