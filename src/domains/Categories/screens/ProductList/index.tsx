import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { ProductListData } from './data';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CategoriesStack, ProductListRouteProp } from 'src/navigation/type';
import { RectButton } from 'react-native-gesture-handler';

// const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export function ProductListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<CategoriesStack>>();
  const route = useRoute<ProductListRouteProp>();
  const { categoryName } = route.params;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {ProductListData.map((item, index) => (
        <Animated.View
          key={item.id}
          style={styles.item}
          entering={FadeIn.delay(50 * index)}
          exiting={FadeOut}
          layout={Layout.delay(100)}>
          <Text style={{ color: 'black' }}>{item.name}</Text>
          <RectButton
            style={styles.button}
            onPress={() => {
              navigation.navigate('MapScreen', {
                categoryName: categoryName,
                productName: item.name,
                productPrice: item.price,
              });
            }}>
            <Text style={{ color: 'white' }}>{'Buy'}</Text>
          </RectButton>
        </Animated.View>
      ))}
    </ScrollView>
  );
}
