import { useContext } from "react";
import { MenuOptionPros } from "../../../../components/MenuOption";
import HouseIcon from "../../../../../assets/icons/house.svg";
import OngIcon from "../../../../../assets/icons/ongs.svg";
import { AuthContext } from "../../../../context/AuthContext";
import { MenuView } from "./MenuView";

export const Menu = () => {
  const { user } = useContext(AuthContext);

  const options: MenuOptionPros[] = [
    {
      optionName: "Home",
      optionIcon: <HouseIcon />,
    },
    {
      optionName: "Ajude uma Ong",
      optionIcon: <OngIcon />,
    },
  ];

  return (
    <MenuView
      userName={user?.name}
      userAvatar={user?.avatar}
      userEmail={user?.email}
      menuOptions={options}
    />
  );
};
