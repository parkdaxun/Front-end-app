
import Main from "./src/screens/Mainscreen";
import Sleep from "./src/screens/Sleepscreen";
import Setting from "./src/screens/Settingscreen";
import Call from "./src/screens/Callscreen"
import Login from "./src/screens/Loginscreen";
import Signup from './src/screens/Signupscreen';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer >
          <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Sleep" component={Sleep} />
              <Stack.Screen name="Setting" component={Setting} />
              <Stack.Screen name="Call" component={Call} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
