import { useContext } from "react";
import { MenuOptionPros } from "../../../../components/MenuOption";
import { AuthContext } from "../../../../context/AuthContext";
import { MenuView } from "./MenuView";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationTypes } from "../../../../routes/interfaces/propsNavigationApp";
import { Alert } from "react-native";

import HouseIcon from "../../../../../assets/icons/house.svg";
import LogoutIcon from "../../../../../assets/icons/logout.svg";
import HeartPlusIcon from "../../../../../assets/icons/heart-plus.svg";
import ConfigIcon from "../../../../../assets/icons/config.svg";
import FavoriteIcon from "../../../../../assets/icons/favorite.svg";

export const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  const navigation = useNavigation<AppNavigationTypes>();

  const options: MenuOptionPros[] = [
    {
      optionName: "Home",
      optionIcon: <HouseIcon />,
      onPress: () =>
        navigation.navigate("AppTabs", {
          screen: "Home",
        }),
    },
    {
      optionName: "Doe um pet",
      optionIcon: <HeartPlusIcon />,
      onPress: () => Alert.alert("Em construção", "Tela não implementada."),
    },
    {
      optionName: "Favoritos",
      optionIcon: <FavoriteIcon width={20} height={20} />,
      onPress: () =>
        navigation.navigate("AppTabs", {
          screen: "Favorites",
        }),
    },
    {
      optionName: "Configurações da conta",
      optionIcon: <ConfigIcon />,
      onPress: () => Alert.alert("Em construção", "Tela não implementada."),
    },
    {
      optionName: "Sair",
      optionIcon: <LogoutIcon />,
      onPress: () => logout(),
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
