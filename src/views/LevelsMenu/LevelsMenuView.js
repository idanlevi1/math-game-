import React, { Component } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import Stars from '../CoinsStars/Stars'
import Coins from '../CoinsStars/Coins'
import styles from "./LevelsMenuStyle";
import LevelCrad from './LevelCrad';
import BackButton from '../buttons/BackButton'

const wallBackground = require('../../images/wall.jpg')

class LevelsMenuView extends Component {
  render() {
    const {coins,stars,levels, userLevels,navigation} = this.props
    console.log("user Levels:",userLevels)
    const levelsElements = Object.keys(levels).map(keyLevel => 
      <LevelCrad 
      key={keyLevel} 
      level={levels[keyLevel]} 
      allUserStars={stars}
      userLevelDetails={userLevels && userLevels[keyLevel - 1]}
      navigation={navigation}
      />
    )
    return (
      <ImageBackground style={styles.backgroundContainer} source={wallBackground}>
        <View style={styles.rowIcons}>
            <Stars stars={stars}/>
            <Coins coins={coins}/>
        </View>
      <View style={styles.levelsView}>
        <ScrollView horizontal>
          {levelsElements}
        </ScrollView>
      </View>
      <View style={styles.bottomLine}>
        <BackButton navigation={navigation}/>
      </View>
      </ImageBackground>
    );
  }
}

export default LevelsMenuView;