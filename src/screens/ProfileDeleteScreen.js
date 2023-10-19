import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function ProfileDeleteScreen() {
  const navigation = useNavigation();

  //회원탈퇴
  const handleDeleteAccount = async () => {
    try {
      // 스토리지에서 모든 데이터 삭제
      await AsyncStorage.clear();

      //탈퇴가 완료되면 홈화면으로 돌아감
      Alert.alert("회원 탈퇴 완료", "회원 탈퇴가 완료되었습니다.", [
        {
          text: "확인",
          onPress: () => {
            navigation.navigate("Home");
          },
        },
      ]);
    } catch (error) {
      console.error("회원 탈퇴 오류", error);
      Alert.alert("오류", "회원 탈퇴 중 오류가 발생했습니다.", [
        {
          text: "확인",
          onPress: () => {},
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.notice}>
          계정은 영구히 삭제되며, 이용 내역, 즐겨찾기, 칵테일 리뷰 등 모든 활동
          정보가 삭제됩니다.
        </Text>
      </View>

      <View style={styles.container3}>
        <Text style={styles.warning}>정말 탈퇴하시겠습니까?</Text>
      </View>

      <TouchableOpacity
        style={styles.btncontainer}
        onPress={handleDeleteAccount}
      >
        <Text style={styles.btn}>회원 탈퇴</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //기본 컨테이너
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    //justifyContent: "center",
  },
  container2: {
    //계정은~ 삭제됩니다 컨테이너
    marginTop: 90,
    marginBottom: 300,
  },
  notice: {
    color: "white",
    fontSize: 30,
  },
  warning: {
    color: "red",
    fontSize: 35,
  },
  container3: {
    //정말 탈퇴하겠삼? 컨테이너
    marginBottom: 20,
  },
  btncontainer: {
    backgroundColor: "red",
    height: 50,
    width: 330,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  btn: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
