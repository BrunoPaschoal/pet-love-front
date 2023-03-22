import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={39} height={30} {...props}>
    <Path
      d="m24.74 4.423-3.371 3.39a7.618 7.618 0 0 0-9.333 9.333L6.78 22.383a21.153 21.153 0 0 1-6.057-7.218A20.95 20.95 0 0 1 24.721 4.423h.019Zm7.237 3.524a21.26 21.26 0 0 1 6.095 7.218 20.95 20.95 0 0 1-24.036 10.742l3.371-3.39a7.618 7.618 0 0 0 9.333-9.333l5.256-5.237h-.019Zm-.476-7.6 2.704 2.705-26.93 26.93-2.704-2.704L31.5.348Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgComponent;
