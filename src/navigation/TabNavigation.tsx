import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { RootStackParamList } from './type';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CategoryScreen } from '@domains/Categories/screens/Category';
import { OrdersScreen } from '@domains/ActiveOrder/screens/Orders';

const Tab = createBottomTabNavigator<RootStackParamList>();
export default function MyTabs() {
  return (
    <Tab.Navigator
      backBehavior={'initialRoute'}
      initialRouteName="Categories"
      screenOptions={({ route }) => ({
        // lazy: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';
          if (route.name === 'ActiveOrders') {
            iconName = focused ? 'alarm' : 'alarm-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'airplane' : 'airplane-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarStyle: Platform.select({
          android: {
            height: 72,
          },
          ios: {
            height: '10%',
          },
        }),
        tabBarItemStyle: Platform.select({
          android: {
            paddingBottom: 12,
          },
        }),
      })}>
      <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="ActiveOrders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}
