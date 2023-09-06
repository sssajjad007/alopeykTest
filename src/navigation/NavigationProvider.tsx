import { FC, PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import RNBootSplash from 'react-native-bootsplash';

const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

// const onReady = () =>
//   setTimeout(() => {
//     RNBootSplash.hide();
//   }, 100);

export default NavigationProvider;
