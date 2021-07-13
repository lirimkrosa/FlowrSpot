import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Dots(props) {
  return (
    <Svg
      width={25}
      height={6}
      viewBox="0 0 25 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 5.542a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12.5 5.542a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22.5 5.542a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#949EA0"
      />
    </Svg>
  )
}

export default Dots
