import Main from "./src/screens/mainscreen";
import Sleep from "./src/screens/sleepscreen";
import Splash from "./src/screens/splash";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Sleep" component={Sleep} />
              <Stack.Screen name="Splash" component={Splash} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
