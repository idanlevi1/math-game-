import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './CoinsStarsStyles'

export default Stars = (props) => {
    return ( 
        <View style={styles.card}>
            <Ionicons name={'logo-usd'} size={30} color={'#FFFFFF'}/>
            <Text style={styles.text}>Stars: {props.stars}</Text>
        </View>
     );
}