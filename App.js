import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import MainScreen from "./MainScreen";

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
