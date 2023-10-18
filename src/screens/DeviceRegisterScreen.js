import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DeviceRegisterScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // 화면이 로딩될 때 실행되는 코드
    checkCocktail();
  }, []);

  const checkCocktail = () => {
    const isCocktailConnected = false; //항상 true 반환
    if (isCocktailConnected) {
      navigation.navigate("ConnectedDevice");
    } else {
      navigation.navigate("BluetoothConnect");
    }
  };

  return (
    <View>
      <Text>기기등록이다~~~</Text>
    </View>
  );
};

export default DeviceRegisterScreen;
