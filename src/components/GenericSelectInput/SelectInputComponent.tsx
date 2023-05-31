import * as S from "./style";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import ArrowUp from "../../../assets/icons/arrow-up.svg";
import { useCallback, useEffect, useState } from "react";
import { prepareRenderItem } from "./RenderItem";
import { mockList } from "./mock";
import { FlatList } from "react-native-gesture-handler";
import { ListItemType } from "./types/GenericSelectInputTypes";

interface SelectInputComponentProps {
  label: string;
  onIconPress?: () => void;
  isRequired?: boolean;
  hideInputValue?: boolean;
  errorMessage?: string;
  value: string;
  onChange: ((text: string) => void) | undefined;
  isDisable?: boolean;
  placeholder?: string;
}

export const SelectInputComponent = ({
  label,
  onIconPress,
  hideInputValue,
  value,
  onChange,
  errorMessage,
  isDisable,
  placeholder,
  isRequired,
}: SelectInputComponentProps) => {
  const [listOpen, setListOpen] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<ListItemType | undefined>(
    undefined
  );

  const openOrCloseList = () => {
    setListOpen(!listOpen);
  };

  const verifyItemSelected = useCallback(() => {
    if (itemSelected) {
      setListOpen(false);
    }
  }, [itemSelected]);

  useEffect(() => {
    verifyItemSelected();
  }, [verifyItemSelected]);

  return (
    <S.Container>
      <S.InputLabel isDisable={isDisable}>{`${label}${
        isRequired ? "*" : ""
      }`}</S.InputLabel>
      <S.InputContainer>
        <S.ValueSelectedContainer>
          {!itemSelected && <S.Placeholder>{placeholder}</S.Placeholder>}
          {itemSelected && (
            <S.Badge>
              <S.SeletedItemLabel>{itemSelected.name}</S.SeletedItemLabel>
            </S.Badge>
          )}
        </S.ValueSelectedContainer>
        <S.IconContainer onPress={() => openOrCloseList()}>
          {listOpen && <ArrowUp width={18} height={18} fill={"#666666"} />}
          {!listOpen && <ArrowDown width={18} height={18} fill={"#666666"} />}
        </S.IconContainer>
      </S.InputContainer>
      {listOpen && (
        <S.ListItemsContainer>
          <FlatList
            data={mockList}
            renderItem={prepareRenderItem(setItemSelected)}
            keyExtractor={(_, index) => index.toString()}
            persistentScrollbar
          />
        </S.ListItemsContainer>
      )}
      {errorMessage ? <S.TextError>{errorMessage}</S.TextError> : null}
    </S.Container>
  );
};
