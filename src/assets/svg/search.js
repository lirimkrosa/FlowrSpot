import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Search(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.695 18.216l-4.93-4.95a7.888 7.888 0 001.963-5.192C16.728 3.622 12.976 0 8.363 0 3.752 0 0 3.622 0 8.074c0 4.454 3.752 8.076 8.363 8.076a8.47 8.47 0 004.792-1.462l4.969 4.988c.207.21.486.324.787.324.282 0 .55-.104.754-.294.435-.403.448-1.07.03-1.49zM8.363 2.106c3.41 0 6.183 2.679 6.183 5.968 0 3.292-2.774 5.97-6.183 5.97-3.407 0-6.18-2.678-6.18-5.97 0-3.29 2.773-5.967 6.18-5.967z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={20}
          y1={0}
          x2={0}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ECBCB3" />
          <Stop offset={1} stopColor="#EAA79E" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Search
