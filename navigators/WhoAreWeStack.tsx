import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WhoAreWe from "./(private)/WhoAreWe";
import OurOptionsOne from "./(private)/OurOptionsOne";
import OurOptionsTwo from "./(private)/OurOptionsTwo";

const Stack = createNativeStackNavigator();

// Screens for logged in users
const WhoAreWeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="WhoAreWe" component={WhoAreWe} />
      <Stack.Screen name="OurOptionsOne" component={OurOptionsOne} />
      <Stack.Screen name="OurOptionsTwo" component={OurOptionsTwo} />
    </Stack.Navigator>
  );
};

export default WhoAreWeStack;
