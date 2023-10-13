import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    // 여기에서 회원가입 로직을 구현합니다.
    // 서버에 데이터를 보내고 회원가입 처리를 수행할 수 있습니다.

    // 예시: 각 입력 필드에서 얻은 데이터를 출력
    console.log("Nickname:", nickname);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>닉네임</Text>
      <TextInput
        style={styles.input}
        value={nickname}
        onChangeText={(text) => setNickname(text)}
      />

      <Text style={styles.label}>아이디</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text style={styles.label}>비밀번호</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <Text style={styles.label}>이메일</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <View style={styles.registerbtnContainer}>
        <TouchableOpacity style={styles.registerbtn}>
          <Text
            style={styles.registerbtnText}
            onPress={handleRegister}
            //onPress={() => navigation.navigate("Login")}
            //이메일 또는 아이디가 이미 디비에 저장되어 있다면 회원가입 안됨
          >
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "white",
  },
  registerbtnContainer: {
    flex: 1,
    //justifyContent: "center", // 수직 중앙 정렬
    alignItems: "center", // 수평 중앙 정렬
  },
  registerbtn: {
    backgroundColor: "#be289d",
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 5,
    height: 50,
    width: 100,
    marginBottom: 20,
  },
  registerbtnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default RegisterScreen;
