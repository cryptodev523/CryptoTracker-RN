import { StackNavigationProp } from "@react-navigation/stack";
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  CryptoList: undefined;
  AddCurrency: undefined;
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
