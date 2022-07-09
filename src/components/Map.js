import React, {useContext} from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
 
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} />
  }
  // console.log(state);

  const initialLocation = {
    longitude: -80.079320,
    latitude: 43.927550,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        // ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
      >
      {/* <Polyline coordinates={points} /> */}
      <Circle 
        center={currentLocation.coords} 
        showsUserLocation={true}
        // center={initialLocation} 
        radius={30} 
        strokeColor="rgba(158, 158, 255, 1.0)" 
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
