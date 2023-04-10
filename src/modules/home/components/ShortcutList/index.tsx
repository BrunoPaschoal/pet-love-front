import AdoptFilledIcon from "../../../../../assets/icons/adopt-filled.svg";
import OngsFilledIcon from "../../../../../assets/icons/ongs-filled.svg";
import HeartplusFilledIcon from "../../../../../assets/icons/heartplus-filled.svg";
import BookIcon from "../../../../../assets/icons/book.svg";
import theme from "../../../../themes";
import * as S from "./style";
import {
  ShortcutItem,
  ShortcutItemProps,
} from "../../../../components/ShortcutItem";

export const ShortcutList = ({}) => {
  const iconSize = 30;
  const iconColor = theme["defaultAppTheme"].colors.secondary;

  const shortcutInfo: ShortcutItemProps[] = [
    {
      icon: (
        <AdoptFilledIcon width={iconSize} height={iconSize} fill={iconColor} />
      ),
      title: "Adote",
      navigateTo: "AppTabs",
    },
    {
      icon: (
        <OngsFilledIcon width={iconSize} height={iconSize} fill={iconColor} />
      ),
      title: "Ajude uma ONG",
      navigateTo: "AppTabs",
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
      navigateTo: "AppTabs",
    },
    {
      icon: <BookIcon width={iconSize} height={iconSize} fill={iconColor} />,
      title: "Cuide bem do seu pet",
      navigateTo: "AppTabs",
    },
  ];

  return (
    <S.Container horizontal showsHorizontalScrollIndicator={false}>
      <S.ShortcutListContainer>
        {shortcutInfo.map((info, i) => (
          <ShortcutItem
            icon={info.icon}
            title={info.title}
            navigateTo={info.navigateTo}
            key={i}
          />
        ))}
      </S.ShortcutListContainer>
    </S.Container>
  );
};
