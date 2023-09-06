import { RouteProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
export type RootStackParamList = {
  Categories: undefined;
  ActiveOrders: undefined;
};
export type ActiveOrders = {
  ActiveOrderScreen: undefined;
};

export type CategoriesStack = {
  Category: undefined;
  ProductList: { categoryName: string };
  MapScreen: { categoryName: string; productName: string; productPrice: number };
};

export type ActiveOrderScreenProps = NativeStackScreenProps<ActiveOrders>;
export type CategoriesScreenProps = NativeStackScreenProps<CategoriesStack>;
export type ProductListRouteProp = RouteProp<CategoriesStack, 'ProductList'>;
export type MapScreenRouteProp = RouteProp<CategoriesStack, 'MapScreen'>;
