import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Button } from "react-native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";

export const LoginScreen = () => {
  const navigation = useNavigation<propsStack>();

  const handlePress = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Button title="Cadastro" onPress={() => handlePress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
    color: "#2e2e2e",
    alignItems: "center",
    justifyContent: "center",
  },
});
