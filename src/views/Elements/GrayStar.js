import React from "react";
import { View, Image } from "react-native";
import styles from "./ElementsStyles";

export default GrayStar = (props) => {
  return (
    <View style={styles.card}>
        <Image 
        style={{
            width:props.size ? props.size : 60,
            height:props.size ? props.size : 60,
        }} 
        resizeMode='contain' 
        source={require('../../../assets/images/starGray.png')}
        />
    </View>
  );
};