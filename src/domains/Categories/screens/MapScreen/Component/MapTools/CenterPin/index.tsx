import React from 'react';
import { Platform, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

export function CenterPin() {
  return (
    <View style={styles.wrapper} pointerEvents="none">
      <Ionicons name={'location-sharp'} size={60} color={'blue'} style={{ alignSelf: 'center' }} />
    </View>
  );
}
