import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Star(props) {
  return (
    <Svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32c6.627 0 12-5.373 12-12S30.627 8 24 8s-12 5.373-12 12 5.373 12 12 12z"
        fill="#fff"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.375 19.55a.698.698 0 00.188-.736.732.732 0 00-.602-.489l-2.518-.352a.33.33 0 01-.248-.174l-1.126-2.198a.745.745 0 00-.669-.401.747.747 0 00-.669.4L22.605 17.8a.328.328 0 01-.248.174l-2.517.352a.732.732 0 00-.603.489.699.699 0 00.189.737l1.822 1.71a.312.312 0 01.094.281l-.43 2.416c-.037.213.02.42.163.583.223.255.61.332.92.175l2.252-1.14a.347.347 0 01.307 0l2.252 1.14a.759.759 0 00.92-.174c.142-.163.2-.371.162-.584l-.43-2.416a.312.312 0 01.095-.28l1.822-1.711z"
      fill="#D4D8D9"
    />
  </Svg>
  )
}

export default Star
