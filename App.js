import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import LoginScreen from "./src/screens/LoginScreen.js";
import RegisterScreen from "./src/screens/RegisterScreen.js";
import Navigation from "./src/navigations/Navigation.js";
import DeviceRegisterScreen from "./src/screens/DeviceRegisterScreen.js";
import ConnectedDeviceScreen from "./src/screens/ConnectedDeviceScreen.js";
import BluetoothConnectScreen from "./src/screens/BluetoothConnectScreen.js";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitle: "로그인",
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerTitle: "회원가입",
            }}
          />
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DeviceRegister"
            component={DeviceRegisterScreen}
            options={{
              headerTitle: "기기등록",
            }}
          />
          <Stack.Screen
            name="ConnectedDevice"
            component={ConnectedDeviceScreen}
          />
          <Stack.Screen
            name="BluetoothConnect"
            component={BluetoothConnectScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
