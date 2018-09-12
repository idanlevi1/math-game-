import React from 'react';
import { View, Text } from 'react-native';
import styles from './CoinsStarsStyles'
import AnimatableImage from '../components/AnimatableImage'

export default Coins = (props) => {
    return ( 
        <View style={styles.card}>
            <AnimatableImage source={require('../../../assets/images/coins.png')}/>
            <Text style={styles.text}>Coins: {props.coins}</Text>
        </View>
     );
}