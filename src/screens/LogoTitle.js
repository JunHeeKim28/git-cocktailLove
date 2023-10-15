import { StyleSheet, Image, View } from "react-native";

const LogoTitle = () => {
  return (
    <View style={StyleSheet.create}>
      <Image
        source={require("../screens/cocktailLoveLogo.png")}
        style={{ width: 40, height: 40 }}
        resizeMode="center"
      />
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

export default LogoTitle;
