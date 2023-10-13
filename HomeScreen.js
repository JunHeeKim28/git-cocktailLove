import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };
  const goToRegisterScreen = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/cocktailLoveLogo.png")}
        style={styles.image}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText1} onPress={goToLoginScreen}>
            로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText1} onPress={goToRegisterScreen}>
            회원가입
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  basicText: {
    color: "#FFF",
  },
  image: {
    width: 200,
    height: 200,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 20,
    paddingVertical: 20,
  },
  btn1: {
    backgroundColor: "#be289d",
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    width: 140,
  },
  btnText1: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
  },
});
