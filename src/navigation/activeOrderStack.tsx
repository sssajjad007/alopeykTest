import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ActiveOrders } from './type';
import { OrdersScreen } from '@domains/ActiveOrder/screens/Orders';

const activeOrderStack = createNativeStackNavigator<ActiveOrders>();

export default function ACtiveOrderNavigation() {
  return (
    <activeOrderStack.Navigator initialRouteName={'ActiveOrderScreen'} screenOptions={{ headerShown: false }}>
      <activeOrderStack.Screen name={'ActiveOrderScreen'} component={OrdersScreen} />
    </activeOrderStack.Navigator>
  );
}
