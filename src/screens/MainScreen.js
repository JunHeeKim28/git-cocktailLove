/*

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function UsageScreen() {
  return <Text>이용내역</Text>;
}

function MyPageScreen() {
  return <Text>마이페이지</Text>;
}

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Group>
        <Tab.Screen name="이용내역" component={UsageScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Group>
      <View style={styles.container}>
        <Text>하잉~~</Text>
      </View>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainScreen;
*/
/*
import { View, Text, StyleSheet } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>하잉~~~</Text>
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

export default MainScreen;
*/
/*
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>List Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default MainScreen;
*/

import { Image, StyleSheet, Text, View } from "react-native";

const MainScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text> 하이원 </Text>
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

export default MainScreen;
