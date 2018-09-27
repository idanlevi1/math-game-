import React, { Component } from 'react';
import { View, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import Stars from '../Elements/Stars'
import Coins from '../Elements/Coins'
import styles from "./LevelsMenuStyle";
import LevelCrad from './LevelCrad';
import BackButton from '../buttons/BackButton'

class LevelsMenuView extends Component {
  state = {
    levelsElements1:null,
    levelsElements2:null,
    userLevels:null,
    stars:0,
  }
  async componentDidMount() {
    const {stars, coins, levels, userLevels, navigation} = this.props
    let levelsElements1 = [], levelsElements2 = []
    const helfLength = Math.ceil(Object.keys(levels).length/2)
    Object.keys(levels).forEach((keyLevel,index) => {
      if(index+1 <= helfLength)
        levelsElements1.push(
        <LevelCrad 
        key={index} 
        level={levels[keyLevel]} 
        allUserStars={stars}
        allUserCoins={coins}
        userLevelDetails={userLevels && userLevels[keyLevel]}
        navigation={navigation}
        updateLevelMenu={this.updateLevelMenu}
        />)
      else
        levelsElements2.push(
        <LevelCrad 
        key={index} 
        level={levels[keyLevel]} 
        allUserStars={stars}
        allUserCoins={coins}
        userLevelDetails={userLevels && userLevels[keyLevel]}
        navigation={navigation}
        updateLevelMenu={this.updateLevelMenu}
        />)
     }
    )
    setTimeout(() => this.setState({levelsElements1,levelsElements2}),1);
  }
  
  updateLevelMenu = async() =>{
    await this.componentDidMount()
  }

  render() {
    const {coins, stars, navigation} = this.props
    const {levelsElements1, levelsElements2} = this.state
    return (
      <ImageBackground style={styles.backgroundContainer} source={require('../../../assets/images/wall.jpg')}>
        <View style={styles.rowIcons}>
            <Stars stars={stars}/>
            <Coins coins={coins}/>
        </View>
        <View style={styles.levelsView}>
          {levelsElements1 && levelsElements2 ?
          <View>
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
          :
          <View style={{paddingTop: 50}}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>
          }
        </View>
        <View style={styles.bottomLine}>
          <BackButton navigation={navigation}/>
        </View>
      </ImageBackground>
    );
  }
}

export default LevelsMenuView;