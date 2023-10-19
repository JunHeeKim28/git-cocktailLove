// MyPageScreen.js
import { View, Alert, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  //로그아웃
  const handleLogout = async () => {
    Alert.alert(
      "로그아웃",
      "로그아웃을 하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "확인",
          onPress: async () => {
            // 로그아웃 처리 및 홈 화면으로 이동
            await AsyncStorage.removeItem("userToken"); // 로그인 토큰 삭제
            navigation.navigate("Home");
          },
        },
      ],
      { cancelable: false }
    );
  };
  const gotoProfileDeleteScreen = () => {
    navigation.navigate("ProfileDelete");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.txt}>내 정보 수정하기</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txt}>기기 등록 수정하기</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "gray",
          marginHorizontal: 10,
        }}
      />
      <TouchableOpacity>
        <Text style={styles.txt}>이용 내역</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txt}>즐겨찾기</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txt}>칵테일 리뷰</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "gray",
          marginHorizontal: 10,
        }}
      />
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.txt}>로그아웃 </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txt} onPress={gotoProfileDeleteScreen}>
          회원탈퇴
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  nickname: {
    fontSize: 20,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",

    justifyContent: "center",
  },
  txt: {
    marginLeft: 20,
    fontSize: 30,
    color: "white",
    marginVertical: 20,
  },
});
export default ProfileScreen;
