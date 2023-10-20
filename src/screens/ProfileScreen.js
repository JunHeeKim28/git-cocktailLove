// MyPageScreen.js
import { View, Alert, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
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
            try {
              const response = await axios.post(
                "http://ceprj.gachon.ac.kr:60005/user/logout"
              );

              if (response.data.success) {
                navigation.navigate("Home");
              } else {
                Alert.alert("로그아웃 오류", "로그아웃에 실패했습니다.");
              }
            } catch (error) {
              console.error("로그아웃 오류", error);
              Alert.alert(
                "로그아웃 오류",
                "로그아웃 중에 오류가 발생했습니다."
              );
            }
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
