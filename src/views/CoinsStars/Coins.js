import React from 'react';
import { View, Text } from 'react-native';
import styles from './CoinsStarsStyles'
import AnimatableIcon from '../components/AnimatableIcon'

export default Coins = (props) => {
    return ( 
        <View style={styles.card}>
            <AnimatableIcon name={'logo-usd'}/>
            <Text style={styles.text}>Coins: {props.coins}</Text>
        </View>
     );
}