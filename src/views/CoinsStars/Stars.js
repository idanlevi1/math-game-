import React from "react";
import { View, Text } from "react-native";
import styles from "./CoinsStarsStyles";
import AnimatableIcon from '../components/AnimatableIcon'

export default (Stars = props => {
  return (
    <View style={styles.card}>
      <AnimatableIcon name={'md-star'}/>
      <Text style={styles.text}>Stars: {props.stars}</Text>
    </View>
  );
});