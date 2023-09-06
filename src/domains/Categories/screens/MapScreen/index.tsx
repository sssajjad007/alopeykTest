import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import { styles } from './styles';
import GoogleMap from './Component/GoogleMap';
import type { CoordinatesType } from './Component/GoogleMap/type';
import MapTools from './Component/MapTools';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { CategoriesStack, MapScreenRouteProp, RootStackParamList } from 'src/navigation/type';
import { dispatch } from '@redux/store';
import { setActiveOrders } from '@redux/slices/order';
import { TabActions } from '@react-navigation/native';

type IMapRef = {
  getCenterPosition: () => CoordinatesType;
  movePosition: (lat: number, lng: number) => void;
};
const CONFIRM_LOCATION = 'Confirm Location';

export function MapScreen() {
  const mapRef = useRef<IMapRef>(null);
  const navigation = useNavigation<NativeStackNavigationProp<CategoriesStack>>();
  const jumpToAction = TabActions.jumpTo('ActiveOrders');
  const route = useRoute<MapScreenRouteProp>();
  const { categoryName, productName, productPrice } = route.params;

  const onSubmit = () => {
    const centerPosition = mapRef.current?.getCenterPosition();
    if (centerPosition) {
      const { lat, lng } = centerPosition;
      dispatch(
        setActiveOrders({
          categoryName,
          productName,
          productPrice,
          coordinates: {
            latitude: lat,
            longitude: lng,
          },
        })
      );
      navigation.popToTop();
      navigation.dispatch(jumpToAction);
      //
    } else {
      console.log('error');
    }
  };
  const movePosition = (position: any, moveDellay = true) => {
    mapRef.current?.movePosition(position, 10);
  };
  return (
    <View style={styles.container}>
      <GoogleMap ref={mapRef} />
      <MapTools movePosition={movePosition} />
      <View style={styles.buttonContainer}>
        <RectButton
          style={styles.button}
          onPress={() => {
            onSubmit();
          }}>
          <Text style={{ color: 'white' }}>{CONFIRM_LOCATION}</Text>
        </RectButton>
      </View>
    </View>
  );
}
