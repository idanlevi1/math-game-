import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./CoinsStarsStyles";
import * as Animatable from 'react-native-animatable';

export default (Stars = props => {
  return (
    <View style={styles.card}>
      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
        <Ionicons name={"logo-usd"} size={30} color={"#FFFFFF"} />
      </Animatable.View>
      <Text style={styles.text}>Stars: {props.stars}</Text>
    </View>
  );
});