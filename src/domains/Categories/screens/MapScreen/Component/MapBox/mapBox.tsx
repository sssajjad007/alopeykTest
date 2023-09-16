import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CategoriesStack } from 'src/navigation/type';
import Mapbox from '@rnmapbox/maps';

// Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setWellKnownTileServer(Mapbox.TileServers.Mapbox);
Mapbox.setAccessToken('pk.eyJ1Ijoic3NzYWpqYWQwMDciLCJhIjoiY2xta2Nod3Q2MDFjeTJrdGJjeWhkd2JsbSJ9.ZceMST2dBSiRrtqFMdO6pg');

export function CategoryScreen() {
  let Center = { lat: 35.76517200949651, lng: 51.39774827286601 };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
          <Mapbox.Camera
            zoomLevel={15}
            centerCoordinate={[Center.lng, Center.lat]}
            animationMode="flyTo"
            animationDuration={2000}
          />
          <Mapbox.PointAnnotation
            id="userLocation"
            coordinate={[Center.lng, Center.lat]}
            title="Your location"
            onDragEnd={(e) => {
              console.log(e);
            }}
            draggable
          />
        </Mapbox.MapView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  container: {
    height: '100%',

    width: '100%',
  },

  map: {
    flex: 1,
  },
});
