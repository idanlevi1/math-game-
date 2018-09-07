import React from "react";
import { View, Text } from "react-native";
import styles from "./CoinsStarsStyles";
import AnimatableImage from '../components/AnimatableImage'

export default (Stars = props => {
  return (
    <View style={styles.card}>
      <AnimatableImage source={require('../../images/stars.png')}/>
      <Text style={styles.text}>Stars: {props.stars}</Text>
    </View>
  );
});