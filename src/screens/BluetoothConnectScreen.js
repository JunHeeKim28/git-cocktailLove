import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BluetoothConnectScreen = () => {
  const [deviceName, setDeviceName] = useState(null);

  useEffect(() => {
    // 가정: 블루투스 기기의 이름을 어딘가에서 가져오는 로직
    const deviceNameFromBluetooth = "My Bluetooth Device";
    setDeviceName(deviceNameFromBluetooth);
  }, []);

  const handleConnectDevice = () => {
    // 연결을 시도하는 로직을 이 부분에 추가
    // 연결이 성공하면 deviceName을 설정하고 화면을 업데이트할 수 있습니다.
  };

  return (
    <View style={styles.container}>
      <View style={styles.noConnectionContainer}>
        <Text style={styles.noConnectionText}>
          이런! 기기가 연결되어있지 않아요.
        </Text>
        <TouchableOpacity
          style={styles.connectButton}
          onPress={handleConnectDevice}
        >
          <Text>기기 연결</Text>
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
  noConnectionContainer: {
    alignItems: "center",
  },
  noConnectionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  connectButton: {
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 5,
  },
});

export default BluetoothConnectScreen;
