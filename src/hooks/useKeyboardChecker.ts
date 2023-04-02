import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

const useKeyboardChecker = () => {
  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return keyboardShow;
};

export default useKeyboardChecker;
