import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../colors';
import * as Animatable from 'react-native-animatable'
import Toast from 'react-native-simple-toast';
import Stars from '../CoinsStars/Stars'
import Coins from '../CoinsStars/Coins'
import styles from "./LevelsMenuStyle";

const logoImg = require('../../images/Logo.png');
const wallBackground = require('../../images/wall.jpg')


class LevelsMenuView extends Component {
  render() {
    console.log("LEVELMENU VIEW")
    const {coins,stars} = this.props
    console.log("LEVELMENU VIEW",stars)
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={wallBackground}
        />
        <View style={styles.rowIcons}>
            <Stars stars={stars}/>
            <Coins coins={coins}/>
        </View>
      <View style={[styles.levelsView,{paddingVertical:30}]}>

        </View>
      </View>
    );
  }
}

export default LevelsMenuView;
