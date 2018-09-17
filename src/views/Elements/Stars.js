import React from "react";
import { View, Text } from "react-native";
import styles from "./ElementsStyles";
import AnimatableImage from '../components/AnimatableImage'

export default (Stars = props => {
  return (
    <View style={styles.card}>
      <AnimatableImage source={require('../../../assets/images/stars.png')}/>
      <Text style={styles.text}>Stars: {props.stars}</Text>
    </View>
  );
});