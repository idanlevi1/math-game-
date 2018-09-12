import React from 'react';
import {View, Text } from 'react-native';
import styles from "./LevelsMenuStyle";
const PrefaceLevel = (props) => {
    const {level} = props.navigation.state.params
    return ( 
        <View style={styles.prefaceLevelContainer}>
        <Text>{level.name}</Text>
        <Text>{level.name}</Text>
        <Text>{level.name}</Text>
        <Text>{level.name}</Text>
        <Text>{level.name}</Text>
        </View>
     );
}
 
export default PrefaceLevel;