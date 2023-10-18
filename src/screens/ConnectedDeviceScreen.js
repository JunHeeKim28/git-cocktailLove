import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ConnectedDeviceScreen = () => {
  const [deviceName, setDeviceName] = useState(null);

  // 가정: 블루투스 기기의 이름을 어딘가에서 가져오는 로직
  useEffect(() => {
    // 임의의 기기 이름을 설정
    const deviceNameFromBluetooth = "라즈베리파이 디바이스";
    setDeviceName(deviceNameFromBluetooth);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.dvcName}>{deviceName}</Text>
      <Text>가 맞나요??</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text>YES!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>다른 기기 찾아보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  dvcName: {
    color: "blue",
    fontSize: 30,
  },
  btn: {
    marginHorizontal: 10, // 버튼 사이 간격 조절
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 5,
    marginHorizontal: 30,
  },
});

export default ConnectedDeviceScreen;
