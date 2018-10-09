import React, { Component } from 'react';
import { View, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import Stars from '../Elements/Stars'
import Coins from '../Elements/Coins'
import styles from "./LevelsMenuStyle";
import LevelCrad from './LevelCrad';
import BackButton from '../buttons/BackButton'
import AdBanner from '../components/AdBanner'
import AdBannerCircle from '../components/AdBannerCircle';
const AD_LEVEL = 5

class LevelsMenuView extends Component {
  state = {
    levelsElements1:null,
    levelsElements2:null,
    userLevels:null,
    firstTime:false,
  }
  componentDidMount() {
    this.setState({firstTime:true})
  }
  
  componentDidUpdate(prevProps, prevState) {
    const {stars, coins, levels, userLevels, navigation, sound, AudioPlayer} = this.props
    if(prevProps.coins != coins || prevProps.stars != stars || prevProps.userLevels!=userLevels || this.state.firstTime){
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
          sound={sound}
          AudioPlayer={AudioPlayer}
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
          sound={sound}
          AudioPlayer={AudioPlayer}
          />)
        if(keyLevel==AD_LEVEL)
          levelsElements1.push(<AdBannerCircle key={'ad'+index}/>)
      })
      setTimeout(() => this.setState({levelsElements1,levelsElements2,firstTime:false}),1);
    }
  }
  

  render() {
    const {coins, stars, navigation} = this.props
    const {levelsElements1, levelsElements2} = this.state
    return (
      <ImageBackground style={styles.backgroundContainer} source={require('../../../assets/images/wall.jpg')}>
        <View style={styles.rowIcons}>
            <Stars stars={stars} withoutAnimation/>
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
        <AdBanner marginTop={0}/>
      </ImageBackground>
    );
  }
}

export default LevelsMenuView;