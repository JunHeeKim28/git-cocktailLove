import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/cocktailLoveLogo.png")}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="아이디"
        placeholderTextColor="gray"
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="gray"
        secureTextEntry={true} // 비번 입력 시 별 표시
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText2}>아이디 찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText2}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    width: 200,
    height: 200,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    color: "white",
  },
  loginButton: {
    backgroundColor: "#be289d",
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    height: 50,
    width: 100,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column", // Arrange buttons horizontally
    justifyContent: "space-between", // Add space between buttons
    width: 300,
    marginBottom: 10, // Add some margin below the buttons
  },
  btn2: {
    backgroundColor: "black",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText2: {
    color: "gray",
    marginBottom: "20",
  },
});
