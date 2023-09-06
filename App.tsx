import React from 'react';
import { store } from '@redux/store';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationProvider from 'src/navigation/NavigationProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from 'src/navigation/TabNavigation';
import { ProductListScreen } from '@domains/Categories/screens/ProductList';
import { MapScreen } from '@domains/Categories/screens/MapScreen';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationProvider>{StartApp()}</NavigationProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;

export function StartApp() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigation" component={MyTabs} />
      <Stack.Screen name={'ProductList'} component={ProductListScreen} />
      <Stack.Screen name={'MapScreen'} component={MapScreen} />
    </Stack.Navigator>
  );
}
