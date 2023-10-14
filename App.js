import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import LoginScreen from "./src/screens/LoginScreen.js";
import RegisterScreen from "./src/screens/RegisterScreen.js";
import MainScreen from "./src/screens/MainScreen.js";

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
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
