import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../../screens/index";

const Stack = createNativeStackNavigator();

// Auth screens
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Screens.Login}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
