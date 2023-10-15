// import { NavigationContainer } from "@react-navigation/native";
// import ContentTab from "./ContentTab";

// const onReady = () => {
//   // NaviationsContainer가 준비된 후에 실행할 코드를 여기에 작성하세요.
//   console.log("NavigationContainer is ready!");
// };

// const Navigation = () => {
//   return (
//     <NavigationContainer onReady={onReady}>
//       <ContentTab />
//     </NavigationContainer>
//   );
// };

// export default Navigation;

import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreen from "../screens/ListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainScreen from "../screens/MainScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default Navigation;
