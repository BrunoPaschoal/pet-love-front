import * as S from "./style";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import ArrowUp from "../../../assets/icons/arrow-up.svg";
import CloseIcon from "../../../assets/icons/close.svg";
import { useCallback, useEffect, useState } from "react";
import { RenderItem } from "./RenderItem";
import { mockList } from "./mock";
import { ListItemType } from "./types/GenericSelectInputTypes";
import OutsidePressHandler from "react-native-outside-press";
import { ScrollView } from "react-native-gesture-handler";
import { checkIfTheyAreTheSameValues } from "../../helpers/checkIfTheyAreTheSameValues";
import theme from "../../themes";

interface SelectInputComponentProps {
  label: string;
  isRequired?: boolean;
  errorMessage?: string;
  itemSelected: ListItemType;
  zIndex?: number;
  onChange: (selectedItem: any) => void;
  isDisable?: boolean;
  placeholder?: string;
}

export const SelectInputComponent = ({
  label,
  itemSelected,
  onChange,
  errorMessage,
  isDisable,
  zIndex,
  placeholder,
  isRequired,
}: SelectInputComponentProps) => {
  const [listOpen, setListOpen] = useState<boolean>(false);
  const iconColor = theme["defaultAppTheme"].colors.inputSelectIcon;

  const openOrCloseList = () => {
    setListOpen(!listOpen);
  };

  const clearSelection = () => {
    onChange(undefined);
  };

  const verifyWhenItemIsSelected = useCallback(() => {
    if (itemSelected) {
      setListOpen(false);
    }
  }, [itemSelected]);

  useEffect(() => {
    verifyWhenItemIsSelected();
  }, [verifyWhenItemIsSelected]);

  return (
    <OutsidePressHandler
      disabled={false}
      onOutsidePress={() => setListOpen(false)}
      style={{ zIndex: zIndex ? zIndex : 2 }}
    >
      <S.Container>
        <S.InputLabel isDisable={isDisable}>{`${label}${
          isRequired ? "*" : ""
        }`}</S.InputLabel>
        <S.InputContainer onPress={() => openOrCloseList()}>
          <S.ValueSelectedContainer>
            {!itemSelected && <S.Placeholder>{placeholder}</S.Placeholder>}
            {itemSelected && (
              <S.Badge>
                <S.SeletedItemLabel>{itemSelected.name}</S.SeletedItemLabel>
              </S.Badge>
            )}
          </S.ValueSelectedContainer>
          <S.IconContainer
            onPress={
              itemSelected ? () => clearSelection() : () => openOrCloseList()
            }
          >
            {listOpen && !itemSelected && (
              <ArrowUp width={18} height={18} fill={iconColor} />
            )}
            {!listOpen && !itemSelected && (
              <ArrowDown width={18} height={18} fill={iconColor} />
            )}
            {itemSelected && (
              <CloseIcon width={12} height={12} fill={iconColor} />
            )}
          </S.IconContainer>
        </S.InputContainer>
        {listOpen && (
          <S.ListItemsContainer>
            <ScrollView nestedScrollEnabled persistentScrollbar>
              {mockList.map((item, i) => (
                <RenderItem
                  item={item}
                  onSelect={onChange}
                  key={i}
                  isSelected={checkIfTheyAreTheSameValues(
                    itemSelected?.value,
                    item?.value
                  )}
                />
              ))}
            </ScrollView>
          </S.ListItemsContainer>
        )}
        {errorMessage ? <S.TextError>{errorMessage}</S.TextError> : null}
      </S.Container>
    </OutsidePressHandler>
  );
};
