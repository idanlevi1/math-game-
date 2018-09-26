import React from "react";
import { View, Text } from "react-native";
import styles from "./ElementsStyles";
import AnimatableImage from '../components/AnimatableImage'

export default Stars = (props) => {
  getText = () =>(
    <Text style={styles.text}>{props.stars} Stars</Text>
  )
  return (
    <View style={styles.card}>
      <AnimatableImage 
      source={require('../../../assets/images/star.png')}
      size={props.size ? props.size : 60}
      />
      {!props.withoutText && this.getText()}
    </View>
  );
};