import { MenuOption, MenuOptionPros } from "../../../../components/MenuOption";
import { ProfileHeader } from "../../../../components/ProfileHeader";
import * as S from "./style";

interface MenuViewProps {
  userName: string | undefined;
  userAvatar: string | undefined;
  userEmail: string | undefined;
  menuOptions: MenuOptionPros[];
}

export const MenuView = ({
  userAvatar,
  userEmail,
  userName,
  menuOptions,
}: MenuViewProps) => {
  return (
    <S.Container>
      <S.HeaderContainer style={{ elevation: 10, shadowColor: "#7c7c7c" }}>
        <ProfileHeader
          title={userName}
          description={userEmail}
          avatarUri={userAvatar}
        />
      </S.HeaderContainer>
      <S.OptionsContainer>
        {menuOptions.map((item, i) => (
          <MenuOption
            optionName={item.optionName}
            optionIcon={item.optionIcon}
            onPress={item?.onPress}
            key={i}
          />
        ))}
      </S.OptionsContainer>
    </S.Container>
  );
};
