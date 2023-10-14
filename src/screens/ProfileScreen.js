import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text> 하이쓰리 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
