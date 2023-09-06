import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import type { IGridItemProps } from './type';

export function GridItem(props: IGridItemProps) {
  const { name, id, onPress } = props;

  return (
    <TouchableOpacity style={styles.gridItem} key={id} onPress={onPress} activeOpacity={0.9}>
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );
}
