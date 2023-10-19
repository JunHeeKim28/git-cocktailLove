import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreen from "../screens/ListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainScreen from "../screens/MainScreen";
import LogoTitle from "../screens/LogoTitle";
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarLabel: "이용내역",
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerTitle: () => <LogoTitle />,
          tabBarLabel: "메인",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "마이페이지",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default Navigation;
