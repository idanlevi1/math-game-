import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './CoinsStarsStyles'

export default Coins = (props) => {
    return ( 
        <View style={styles.card}>
            <Ionicons name={'md-star'} size={30} color={'#FFFFFF'}/>
            <Text style={styles.text}>Coins: {props.coins}</Text>
        </View>
     );
}