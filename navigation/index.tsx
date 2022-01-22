import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import { Onboarding, Signin, Signup } from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Signin" component={Signin} />
  </Stack.Navigator>
);

export default function MainNavigation() {
  return(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
