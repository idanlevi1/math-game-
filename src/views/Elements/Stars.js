import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ElementsStyles";
import AnimatableImage from '../components/AnimatableImage'
const starImg = require('../../../assets/images/star.png')

export default Stars = (props) => {
  return (
    <View style={styles.card}>
      {props.withoutAnimation ?
      <Image 
      style={{
          width:props.size ? props.size : 60,
          height:props.size ? props.size : 60,
      }} 
      resizeMode='contain' 
      source={starImg}
      />
      : 
      <AnimatableImage 
      source={starImg}
      size={props.size ? props.size : 60}
      />
      }
      {!props.withoutText && <Text style={styles.text}>{props.stars}</Text>}
    </View>
  );
};