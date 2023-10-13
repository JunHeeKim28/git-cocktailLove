import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  /*const navigation = useNavigation();
  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };*/

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("아이디: ", userId);
    console.log("비밀번호: ", password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/cocktailLoveLogo.png")}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        value={userId}
        placeholder="아이디"
        placeholderTextColor="gray"
        onChangeText={(text) => setUserId(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="gray"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true} // 비번 입력 시 별 표시
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={styles.loginButtonText}
          onPress={handleLogin}
          //회원정보에 없는 아이디나 비밀번호를 입력하면 로그인 불가 알림창 뜸
        >
          로그인
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText2}>아이디 찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText2}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

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
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 5,
    height: 50,
    width: 100,
    marginBottom: 20,
    alignContent: "center",
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

export default LoginScreen;
