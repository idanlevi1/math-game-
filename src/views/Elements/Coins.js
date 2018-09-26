import React from 'react';
import { View, Text } from 'react-native';
import styles from './ElementsStyles'
import AnimatableImage from '../components/AnimatableImage'

export default Coins = (props) => {
    return ( 
        <View style={styles.card}>
            <AnimatableImage source={require('../../../assets/images/coins.png')}/>
            <Text style={[styles.text,{fontSize: 22}]}>{props.coins} Coins</Text>
        </View>
     );
}