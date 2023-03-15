import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";

export const SignupScreen = () => {
  const navigation = useNavigation<propsStack>();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Button title="Voltar para o login" onPress={() => handlePress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
  },
});
