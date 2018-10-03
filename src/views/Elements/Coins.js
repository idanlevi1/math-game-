import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ElementsStyles'

export default Coins = (props) => {
    return ( 
        <View style={styles.card}>
            <Image 
            style={{
                width:props.size ? props.size : 60,
                height:props.size ? props.size : 60,
            }} 
            resizeMode='contain' 
            source={require('../../../assets/images/coins.png')}
            />
            <Text style={styles.text}>{props.coins}</Text>
        </View>
     );
}