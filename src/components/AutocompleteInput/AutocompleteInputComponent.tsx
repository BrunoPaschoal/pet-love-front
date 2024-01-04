import * as S from "./style";
import CloseIcon from "../../../assets/icons/close.svg";
import { useCallback, useEffect, useState } from "react";
import { RenderItem } from "./RenderItem";
import { ListItemType } from "./types/AutocompleteInputTypes";
import { ScrollView } from "react-native-gesture-handler";
import { checkIfTheyAreTheSameValues } from "../../helpers/checkIfTheyAreTheSameValues";
import theme from "../../themes";

interface AutocompleteInputComponentProps {
  label: string;
  isRequired?: boolean;
  errorMessage?: string;
  itemSelected: ListItemType;
  data: ListItemType[];
  zIndex?: number;
  onChange: (selectedItem: any) => void;
  isDisable?: boolean;
  placeholder?: string;
}

export const AutocompleteInputComponent = ({
  label,
  itemSelected,
  onChange,
  data,
  errorMessage,
  isDisable,
  zIndex,
  placeholder,
  isRequired,
}: AutocompleteInputComponentProps) => {
  const [listOpen, setListOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const iconColor = theme["defaultAppTheme"].colors.inputSelectIcon;

  const InputColorsProps = {
    selectionColor: theme["defaultAppTheme"].colors.gray_02,
    placeholderTextColor: theme["defaultAppTheme"].colors.placeholder,
  };

  const openOrCloseList = () => {
    setListOpen(!listOpen);
  };

  const clearSelection = () => {
    onChange(undefined);
  };

  const onInputFocus = () => {
    setListOpen(true);
  };

  const onInputBlur = () => {
    setListOpen(false);
  };

  const onInputChange = (text: string) => {
    console.warn(text);
    setInputValue(text);
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
    <S.Container behavior="height" style={{ zIndex: zIndex ? zIndex : 2 }}>
      <S.InputLabel isDisable={isDisable}>{`${label}${
        isRequired ? "*" : ""
      }`}</S.InputLabel>
      <S.InputContainer>
        {!itemSelected && (
          <S.TextInput
            {...InputColorsProps}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            value={inputValue}
            onChangeText={(value) => onInputChange(value)}
            editable={!isDisable}
            placeholder={placeholder}
          />
        )}
        {itemSelected && (
          <S.Badge>
            <S.SeletedItemLabel>{itemSelected.name}</S.SeletedItemLabel>
          </S.Badge>
        )}

        <S.IconContainer
          onPress={
            itemSelected ? () => clearSelection() : () => openOrCloseList()
          }
        >
          {itemSelected && (
            <CloseIcon width={12} height={12} fill={iconColor} />
          )}
        </S.IconContainer>
      </S.InputContainer>
      {listOpen && data?.length > 0 && (
        <S.ListItemsContainer>
          <ScrollView nestedScrollEnabled persistentScrollbar>
            {data.map((item, i) => (
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
  );
};
