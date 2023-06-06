import * as S from "./style";
import { TouchableWithoutFeedback } from "react-native";
import { ListItemType } from "./types/AutocompleteInputTypes";

interface RenderItemProps {
  item: ListItemType;
  onSelect: (item: ListItemType) => void;
  isSelected: boolean;
}

export const RenderItem = ({ item, onSelect, isSelected }: RenderItemProps) => (
  <TouchableWithoutFeedback onPress={() => onSelect(item)}>
    <S.RenderItemContainer>
      <S.RenderItemLabel>{item.name}</S.RenderItemLabel>
      {isSelected && <S.SelectIndicator />}
    </S.RenderItemContainer>
  </TouchableWithoutFeedback>
);
