import { ShortcutItem, ShortcutItemProps } from "../ShortcutItem";
import AdoptFilledIcon from "../../../assets/icons/adopt-filled.svg";
import OngsFilledIcon from "../../../assets/icons/ongs-filled.svg";
import HeartplusFilledIcon from "../../../assets/icons/heartplus-filled.svg";
import BookIcon from "../../../assets/icons/book.svg";
import theme from "../../themes";
import * as S from "./style";

export const ShortcutList = ({}) => {
  const iconSize = 30;
  const iconColor = theme["defaultAppTheme"].colors.secondary;

  const shortcutInfo: ShortcutItemProps[] = [
    {
      icon: (
        <AdoptFilledIcon width={iconSize} height={iconSize} fill={iconColor} />
      ),
      title: "Adote",
      redirectTo: "AppTabs",
    },
    {
      icon: (
        <OngsFilledIcon width={iconSize} height={iconSize} fill={iconColor} />
      ),
      title: "Ajude uma ONG",
      redirectTo: "AppTabs",
    },
    {
      icon: (
        <HeartplusFilledIcon
          width={iconSize}
          height={iconSize}
          fill={iconColor}
        />
      ),
      title: "Doar um bichinho",
      redirectTo: "AppTabs",
    },
    {
      icon: <BookIcon width={iconSize} height={iconSize} fill={iconColor} />,
      title: "Cuide bem do seu pet",
      redirectTo: "AppTabs",
    },
  ];

  return (
    <S.Container horizontal showsHorizontalScrollIndicator={false}>
      <S.ShortcutListContainer>
        {shortcutInfo.map((info, i) => (
          <ShortcutItem
            icon={info.icon}
            title={info.title}
            redirectTo={info.redirectTo}
            key={i}
          />
        ))}
      </S.ShortcutListContainer>
    </S.Container>
  );
};
