import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Welcome",
          headerTitleAlign: "center",
        }}
        name="welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{
          title: "Subscribe",
          headerTitleAlign: "center",
        }}
        name="subscribe"
        component={SubscribeScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
