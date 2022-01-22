/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Onboarding: undefined;
  Signin: undefined;
  Signup: undefined;
  HomeNavigator: undefined;
  GiftCard:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  Screen
>;

export type OnboardingScreenNavigationProps = StackScreenProps<RootStackParamList, 'Onboarding'>;

// export type RootTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, Screen>,
//   NativeStackScreenProps<RootStackParamList>
// >;
