import { StyleSheet, Text, View } from "react-native";

const ListScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text> 하이투 </Text>
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

export default ListScreen;
