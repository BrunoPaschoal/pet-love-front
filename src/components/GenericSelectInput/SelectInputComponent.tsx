import * as S from "./style";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import ArrowUp from "../../../assets/icons/arrow-up.svg";
import { useCallback, useEffect, useState } from "react";
import { RenderItem } from "./RenderItem";
import { mockList } from "./mock";
import { ListItemType } from "./types/GenericSelectInputTypes";
import OutsidePressHandler from "react-native-outside-press";
import { ScrollView } from "react-native-gesture-handler";

interface SelectInputComponentProps {
  label: string;
  onIconPress?: () => void;
  isRequired?: boolean;
  errorMessage?: string;
  value: string;
  zIndex?: number;
  onChange: ((text: string) => void) | undefined;
  isDisable?: boolean;
  placeholder?: string;
}

export const SelectInputComponent = ({
  label,
  onIconPress,
  value,
  onChange,
  errorMessage,
  isDisable,
  zIndex,
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
          <S.IconContainer>
            {listOpen && <ArrowUp width={18} height={18} fill={"#666666"} />}
            {!listOpen && <ArrowDown width={18} height={18} fill={"#666666"} />}
          </S.IconContainer>
        </S.InputContainer>
        {listOpen && (
          <S.ListItemsContainer>
            <ScrollView nestedScrollEnabled>
              {mockList.map((item, i) => (
                <RenderItem item={item} onSelect={setItemSelected} key={i} />
              ))}
            </ScrollView>
          </S.ListItemsContainer>
        )}
        {errorMessage ? <S.TextError>{errorMessage}</S.TextError> : null}
      </S.Container>
    </OutsidePressHandler>
  );
};
