import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Heart(props) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0)" clipRule="evenodd" stroke="#EAA79E">
        <Path d="M14.5 29C22.508 29 29 22.508 29 14.5S22.508 0 14.5 0 0 6.492 0 14.5 6.492 29 14.5 29z" />
        <Path d="M24 12.676C24 10.094 21.824 8 19.139 8a4.895 4.895 0 00-4.14 2.234A4.896 4.896 0 0010.86 8C8.176 8 6 10.094 6 12.676c0 1.406.648 2.664 1.668 3.52l6.888 6.627A.64.64 0 0015 23a.64.64 0 00.444-.177l6.887-6.626C23.352 15.34 24 14.082 24 12.676z" />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path fill="#fff" d="M0 0H29V29H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Heart
