import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Screens } from "../../screens/index";
import WhoAreWeStack from "../WhoAreWeStack";

const Tab = createBottomTabNavigator();

// Screens for logged in users
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="WhoAreWeStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "WhoAreWeStack") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "settings";
          } else if (route.name === "Profile") {
            iconName = "person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#F7C8D5",
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="WhoAreWeStack"
        component={WhoAreWeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Screens.Settings}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Screens.Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
