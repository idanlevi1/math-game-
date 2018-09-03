import React, { Component } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import Stars from '../CoinsStars/Stars'
import Coins from '../CoinsStars/Coins'
import styles from "./LevelsMenuStyle";
import Level from './Level';
import BackButton from '../buttons/BackButton'

const wallBackground = require('../../images/wall.jpg')

class LevelsMenuView extends Component {
  render() {
    const {coins,stars,levels, getUserLevels} = this.props
    console.log("user Levels:",getUserLevels)
    const levelsElements = Object.keys(levels).map(keyLevel => 
      <Level 
      key={keyLevel} 
      level={levels[keyLevel]} 
      allUserStars={stars}
      userLevelDetails={getUserLevels && getUserLevels[keyLevel - 1]}
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
        <BackButton navigation={this.props.navigation}/>
      </View>
      </ImageBackground>
    );
  }
}

export default LevelsMenuView;