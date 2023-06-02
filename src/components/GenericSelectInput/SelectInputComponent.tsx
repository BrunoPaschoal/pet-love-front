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

interface SelectInputComponentProps {
  label: string;
  isRequired?: boolean;
  errorMessage?: string;
  value: ListItemType;
  zIndex?: number;
  onChange: (selectedItem: any) => void;
  isDisable?: boolean;
  placeholder?: string;
}

export const SelectInputComponent = ({
  label,
  value,
  onChange,
  errorMessage,
  isDisable,
  zIndex,
  placeholder,
  isRequired,
}: SelectInputComponentProps) => {
  const [listOpen, setListOpen] = useState<boolean>(false);

  const openOrCloseList = () => {
    setListOpen(!listOpen);
  };

  const clearSelection = () => {
    onChange(undefined);
  };

  const verifyWhenItemIsSelected = useCallback(() => {
    if (value) {
      setListOpen(false);
    }
  }, [value]);

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
            {!value && <S.Placeholder>{placeholder}</S.Placeholder>}
            {value && (
              <S.Badge>
                <S.SeletedItemLabel>{value.name}</S.SeletedItemLabel>
              </S.Badge>
            )}
          </S.ValueSelectedContainer>
          <S.IconContainer
            onPress={value ? () => clearSelection() : () => openOrCloseList()}
          >
            {listOpen && !value && (
              <ArrowUp width={18} height={18} fill={"#666666"} />
            )}
            {!listOpen && !value && (
              <ArrowDown width={18} height={18} fill={"#666666"} />
            )}
            {value && <CloseIcon width={12} height={12} fill={"#666666"} />}
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
                    value?.value,
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
