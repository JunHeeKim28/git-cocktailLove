import axios from "axios";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // 여기서 디비에 정보를 저장하는 로직을 구현해야 합니다.

    // 저장이 완료되면 setIsRegistered(true)를 호출하여 상태를 변경합니다.
    //setIsRegistered(true);

    // 회원가입 완료 알림창을 띄웁니다.
    /*
    예시: 각 입력 필드에서 얻은 데이터를 출력
    //console.log("Nickname:", nickname);
    //console.log("Username:", username);
    //console.log("Password:", password);
    //console.log("Email:", email);
    //console.log("Phone:", phone);
    */

    Alert.alert(
      "회원가입 완료",
      "회원가입이 완료되었습니다.",
      [
        {
          text: "확인",
          onPress: () => {
            navigation.navigate("Login");
          },
        },
        {
          text: "취소",
          onPress: () => {},
        },
      ],
      { cancelable: false } // 바깥쪽 터치로 알림창을 닫지 못하게 설정
    );

    /*axios
      .post("http://your-server-url/signup", { email, password })
      .then((response) => {
        console.log("Signup successful", response.data);
      })
      .catch((error) => {
        console.error("Signup error", error);
      });
      */
  };

  return (
    <ScrollView style={styles.container}>
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
      <Text style={styles.label}>전화번호</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="numeric"
      />
      <View style={styles.registerbtnContainer}>
        <TouchableOpacity style={styles.registerbtn}>
          <Text
            style={styles.registerbtnText}
            //onPress={() => registerAlert()}
            onPress={handleRegister}
            //onPress={() => navigation.navigate("Login")}
            //이메일 또는 아이디가 이미 디비에 저장되어 있다면 회원가입 안됨
          >
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    justifyContent: "center",
  },
  registerbtnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default RegisterScreen;
