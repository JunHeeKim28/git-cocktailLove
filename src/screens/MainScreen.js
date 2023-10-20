import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CocktailRecipeScreen from "./CocktailRecipeScreen";
import RealTimeScreen from "./RealTimeScreen";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window"); // 화면 가로, 세로 길이

const buttonSize = screenWidth / 2 - 10; // 버튼 가로 길이
const buttonHeight = buttonSize / 2; // 버튼 세로 길이

const MainScreen = () => {
  const navigation = useNavigation();

  const goToDeviceRegisterScreen = () => {
    navigation.navigate("DeviceRegister");
  };

  const gotoFavoritesScreen = () => {
    navigation.navigate("Favorites");
  };

  const gotoCocktailRecipeScreen = () => {
    navigation.navigate("CocktailRecipe");
  };

  const gotoRealTimeScreen = () => {
    navigation.navigate("RealTime");
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { width: buttonSize, height: buttonSize + 10 },
          ]}
          onPress={goToDeviceRegisterScreen}
        >
          <Text style={styles.buttonText}>칵테일 제조</Text>
        </TouchableOpacity>
        <View style={styles.buttonColumn}>
          <TouchableOpacity
            style={[styles.button, { width: buttonSize, height: buttonHeight }]}
            onPress={gotoFavoritesScreen}
          >
            <Text style={styles.buttonText}>즐겨찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { width: buttonSize, height: buttonHeight }]}
          >
            <Text style={styles.buttonText}>이용방법</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { width: buttonSize * 2, height: buttonSize + 10 },
        ]}
        onPress={gotoRealTimeScreen}
      >
        <Text style={styles.buttonText}>실시간 인기 칵테일</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { width: buttonSize, height: buttonHeight }]}
        >
          <Text style={styles.buttonText}>기기등록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { width: buttonSize, height: buttonHeight }]}
        >
          <Text style={styles.buttonText}>칵테일 만족도 조사</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { width: buttonSize, height: buttonHeight }]}
          onPress={gotoCocktailRecipeScreen}
        >
          <Text style={styles.buttonText}>칵테일 레시피</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { width: buttonSize, height: buttonHeight }]}
        >
          <Text style={styles.buttonText}>칵테일 리뷰</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonContainer: {
    flexDirection: "row", // 가로로 나란히 배치
  },
  buttonColumn: {
    alignItems: "center", // 세로 정렬
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#be289d",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default MainScreen;
