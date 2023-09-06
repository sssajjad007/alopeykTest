import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions, View } from 'react-native';
import { styles } from './styles';
import type { CoordinatesType, IGoogleMapProps } from './type';

const ASPECT_RATIO = Dimensions.get('screen').width / Dimensions.get('screen').height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let Center = { lat: 35.76517200949651, lng: 51.39774827286601 };

const GoogleMap = forwardRef(({ lat, lng }: IGoogleMapProps, ref) => {
  useImperativeHandle(ref, () => ({
    movePosition: ({ lat, lng }: CoordinatesType, duration = 500) => {
      requestAnimationFrame(() => {
        let region = {
          latitude: parseFloat(lat),
          longitude: parseFloat(lng),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        };
        location.current = region;
        mapRef.current?.animateToRegion(region, duration);
      });
    },
    getCenterPosition: () => {
      const { latitude, longitude } = location.current;
      return { lat: latitude, lng: longitude };
    },
  }));

  const mapRef = useRef<MapView>(null);
  //TODO: get initial position from config file or user location

  let location = useRef({
    latitude: lat ? Number(lat) : Center.lat,
    longitude: lng ? Number(lng) : Center.lng,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  return (
    <View style={styles.container}>
      <MapView
        cacheEnabled={false}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        region={location.current}
        maxZoomLevel={19}
        style={styles.container}
        onRegionChangeComplete={(r) => {
          // console.log(r);
          //     r.nativeEvent.coordinate.latitude,
          //     r.nativeEvent.coordinate.longitude,
          location.current = r;
        }}
        //   onMapReady={onLoad}
      >
        {/* <Marker style={{flex: 1}} coordinate={location.current} /> */}
      </MapView>
    </View>
  );
});
export default memo(GoogleMap, () => true);
