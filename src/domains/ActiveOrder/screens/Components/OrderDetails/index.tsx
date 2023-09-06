import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IOrderDetailsProps } from './type';

export function OrderDetails(props: IOrderDetailsProps) {
  const { categoryName, productName, productPrice } = props;
  if (!categoryName || !productName || !productPrice)
    return (
      <View style={{ alignItems: 'center', paddingTop: 16 }}>
        <Text style={styles.text}>{'There is no active order'}</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`categoryName:   ${categoryName}`}</Text>
      <Text style={styles.text}>{`productName:   ${productName}`}</Text>
      <Text style={styles.text}>{`productPrice:   ${productPrice}`}</Text>
    </View>
  );
}
