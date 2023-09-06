import React from 'react';

import { styles } from './styles';
import usePosition from '@utils/hooks/usePosition';
import { throttled } from '@utils/index';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function MyLocation(props: { movePosition: any }) {
  const { movePosition } = props;
  const { checkPosition } = usePosition(movePosition);
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity activeOpacity={1} onPress={throttled(checkPosition)}>
        <Ionicons name="compass-sharp" size={36} color={'black'} />
      </TouchableOpacity>
    </View>
  );
}
