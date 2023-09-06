import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './styles';

const ASPECT_RATIO = Dimensions.get('screen').width / Dimensions.get('screen').height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export function StaticMap(props: { coordinates: { latitude: string; longitude: string } }) {
  const { coordinates } = props;
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  useEffect(() => {
    setLocation({
      latitude: Number(coordinates.latitude),
      longitude: Number(coordinates.longitude),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  }, [coordinates]);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      cacheEnabled={false}
      style={styles.map}
      scrollEnabled={false}
      zoomEnabled={false}
      minZoomLevel={16}
      pitchEnabled={false}
      rotateEnabled={false}
      region={location}>
      <Marker pinColor="blue" coordinate={location} />
    </MapView>
  );
}
