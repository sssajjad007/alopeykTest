import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { GridItem } from './Component/Item';
import { CategoryData } from './data';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CategoriesStack } from 'src/navigation/type';

export function CategoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<CategoriesStack>>();
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {CategoryData.map((item) => (
          <GridItem
            key={item.id}
            id={item.id}
            name={item.name}
            onPress={() => {
              navigation.navigate('ProductList', {
                categoryName: item.name,
              });
            }}
          />
        ))}
      </View>
    </View>
  );
}
