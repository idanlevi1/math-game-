import React, { Component } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import Stars from '../CoinsStars/Stars'
import Coins from '../CoinsStars/Coins'
import styles from "./LevelsMenuStyle";
import Level from './Level';

const wallBackground = require('../../images/wall.jpg')

class LevelsMenuView extends Component {
  render() {
    const {coins,stars,levels} = this.props
    const levelsElements = Object.keys(levels).map( l => <Level key={l} level={levels[l]}/>)
    return (
      <ImageBackground style={styles.backgroundContainer} source={wallBackground}>
        <View style={styles.rowIcons}>
            <Stars stars={stars}/>
            <Coins coins={coins}/>
        </View>
      <View style={[styles.levelsView,{paddingVertical:30}]}>
        <ScrollView horizontal>
          {levelsElements}
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}

export default LevelsMenuView;