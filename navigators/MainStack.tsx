import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./(public)";
import { useAuth } from "../hooks/useAuth";
import TabNavigator from "./(private)";

function MainStack() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}

export default MainStack;
