import React, { Component } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import Stars from '../Elements/Stars'
import Coins from '../Elements/Coins'
import styles from "./LevelsMenuStyle";
import LevelCrad from './LevelCrad';
import BackButton from '../buttons/BackButton'

class LevelsMenuView extends Component {
  render() {
    const {coins,stars,levels, userLevels, navigation} = this.props
    let levelsElements1 = [], levelsElements2 = []
    const helfLength = Math.ceil(Object.keys(levels).length/2)
     Object.keys(levels).forEach((keyLevel,index) => {
      if(index+1 <= helfLength)
        levelsElements1.push(
        <LevelCrad 
        key={keyLevel} 
        level={levels[keyLevel]} 
        allUserStars={stars}
        userLevelDetails={userLevels && userLevels[keyLevel - 1]}
        navigation={navigation}
        />)
      else
        levelsElements2.push(
        <LevelCrad 
        key={keyLevel} 
        level={levels[keyLevel]} 
        allUserStars={stars}
        userLevelDetails={userLevels && userLevels[keyLevel - 1]}
        navigation={navigation}
        />)
     }
    )
    return (
      <ImageBackground style={styles.backgroundContainer} source={require('../../../assets/images/wall.jpg')}>
        <View style={styles.rowIcons}>
            <Stars stars={stars}/>
            <Coins coins={coins}/>
        </View>
      <View style={styles.levelsView}>
        <View styles={styles.levelsLine}>
          <ScrollView horizontal>
            {levelsElements1}
          </ScrollView>
        </View>
        <View styles={styles.levelsLine}>
          <ScrollView horizontal>
            {levelsElements2}
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomLine}>
        <BackButton navigation={navigation}/>
      </View>
      </ImageBackground>
    );
  }
}

export default LevelsMenuView;