import theme from "../themes";
import ClosedEye from "../../assets/icons/closed-eye.svg";
import Eye from "../../assets/icons/eye.svg";

export const getPasswordIcons = (isPasswordHide: boolean) => {
  const iconsProps = {
    width: 25,
    height: 35,
    fill: theme["defaultAppTheme"].colors.tertiary_light,
  };

  if (isPasswordHide) {
    return <ClosedEye {...iconsProps} />;
  }

  if (!isPasswordHide) {
    return <Eye {...iconsProps} />;
  }
};
