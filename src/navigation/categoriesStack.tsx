import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesStack } from './type';
import { CategoryScreen } from '@domains/Categories/screens/Category';

const categoryStack = createNativeStackNavigator<CategoriesStack>();

export default function CategoryNavigation() {
  return (
    <categoryStack.Navigator initialRouteName={'Category'} screenOptions={{ headerShown: false }}>
      <categoryStack.Screen name={'Category'} component={CategoryScreen} />
    </categoryStack.Navigator>
  );
}
