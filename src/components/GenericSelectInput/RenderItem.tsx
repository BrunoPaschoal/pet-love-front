import * as S from "./style";
import { TouchableWithoutFeedback } from "react-native";
import { ListItemType } from "./types/GenericSelectInputTypes";

interface RenderItemProps {
  item: ListItemType;
  onSelect: (item: ListItemType) => void;
}

export const RenderItem = ({ item, onSelect }: RenderItemProps) => (
  <TouchableWithoutFeedback onPress={() => onSelect(item)}>
    <S.RenderItemContainer>
      <S.RenderItemLabel>{item.name}</S.RenderItemLabel>
    </S.RenderItemContainer>
  </TouchableWithoutFeedback>
);

export const prepareRenderItem = (onSelect: (item: ListItemType) => void) => {
  const renderItem = ({ item }: any) => (
    <RenderItem item={item} onSelect={onSelect} />
  );

  return renderItem;
};
