import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
<<<<<<< HEAD
import { Onboarding, Signin, Signup, Home, Onboardingend, Transactions } from "../screens";
=======
import { Onboarding, Signin, Signup, Home, Onboardingend } from "../screens";
>>>>>>> 7d444d28edf76f76ae2bb697668ccb9fa4c8269c
import { Text } from "react-native-svg";
import HomeIcon from "../assets/icons/Home";
import WalletIcon from "../assets/icons/WalletIcon";
import TransactionIcon from "../assets/icons/TransactionIcon";
import AccountIcon from "../assets/icons/AccountIcon";
import GiftCards from "../screens/Home/GiftCards";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab =  createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown: false, tabBarStyle:{height: 70}}} >
    <Tab.Screen name="Home" options={{tabBarIcon:({focused})=>{return <HomeIcon focused={focused} />}}} component={Home}/>
    <Tab.Screen name="Wallet" options={{tabBarIcon:({focused})=>{return <WalletIcon focused={focused} />}}} component={Home}/>
    <Tab.Screen name="Transaction" options={{tabBarIcon:({focused})=>{return <TransactionIcon focused={focused} />}}} component={Transactions}/>
    <Tab.Screen name="Account" options={{tabBarIcon:({focused})=>{return <AccountIcon focused={focused} />}}} component={Home}/>
  </Tab.Navigator>
)
const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Onboarding"
  >
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Onboardingend" component={Onboardingend} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="HomeNavigator" component={TabNavigator} />
    <Stack.Screen name="GiftCard" component={GiftCards} options={{headerShown:true,headerTitle:""}} />
  </Stack.Navigator>
);

export default function MainNavigation() {
  return(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}