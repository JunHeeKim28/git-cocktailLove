import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { BleManager } from "react-native-ble-plx";

export default function QRScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // 여기에서 QR 코드 데이터(data)를 처리하실 수 있습니다.
  };

  if (hasPermission === null) {
    return <Text>카메라 권한을 요청 중...</Text>;
  }
  if (hasPermission === false) {
    return <Text>카메라 권한을 허용해주세요.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Text>QR 코드 스캔 완료. 처리 중...</Text>}
    </View>
  );
}
