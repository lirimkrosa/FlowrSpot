import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GoBack(props) {
  return (
    <Svg
      width={9}
      height={17}
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.716 8.375l5.955-5.954A1.125 1.125 0 007.08.83L.33 7.58c-.44.439-.44 1.151 0 1.59l6.75 6.75a1.125 1.125 0 001.59-1.59L2.717 8.374z"
        fill="#949EA0"
      />
    </Svg>
  )
}

export default GoBack
