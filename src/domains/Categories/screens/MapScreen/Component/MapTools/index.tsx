import React, { memo } from 'react';
import { CenterPin } from './CenterPin';
import { MyLocation } from './MyLocation';
import { View } from 'react-native';
import { styles } from './styles';

const MapTools = (props: { movePosition: any }) => {
  const { movePosition } = props;

  return (
    <View style={styles.container} pointerEvents="box-none">
      <CenterPin />
      <MyLocation movePosition={movePosition} />
    </View>
  );
};

export default memo(MapTools, () => true);
