import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from "./LevelsMenuStyle";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import {appColors} from '../colors'
import Toast from 'react-native-simple-toast';

class LevelCrad extends Component {

  onLevelClick = () =>{
    const {level, navigation,userLevelDetails,allUserStars} = this.props
    if(allUserStars>=level.reqStars){
      navigation.navigate('PrefaceLevel',{level})
      setTimeout(() => {
        navigation.navigate('Level',{level,userLevelDetails})}, 2000)
    }
    else
      Toast.show('For this level you need '+level.reqStars +' star' + (level.reqStars>1? 's':''))
  }

  getStarIcons = (stars) =>{
    let elements = []
    for(var i=0; i<stars ;i++)
      elements.push(<Ionicons name={'md-star'} size={35} color={appColors.backgroundButton} key={i}/>)
    for(let j=i; j<3 ;j++)
      elements.push(<Ionicons name={'md-star-outline'} size={35} color={appColors.backgroundButton} key={j}/>)
    return elements
  }

  render() {
    const {level, userLevelDetails, allUserStars} = this.props
    const disableLevel = allUserStars >= level.reqStars ? false : true
    const playBefore = userLevelDetails ? false : true
    return (
      <TouchableOpacity onPress={this.onLevelClick}>
        <ImageBackground resizeMode='stretch' style={[{width:null},disableLevel&&{opacity:0.6}]} source={require('../../../assets/images/letter.png')}>
          <View style={styles.levelContainer}>
            <Animatable.View style={styles.starsLine} animation="pulse" easing="ease" iterationCount="infinite">
              {this.getStarIcons(!playBefore ? userLevelDetails.stars : 0)}
            </Animatable.View>
            <Text>{level.number}</Text>
            <Text>{level.name}</Text>
            <Text>time: {level.time}</Text>
            <Text>record: {level.record}</Text>
            <Text>type: {level.type}</Text>
            <Image style={{width: 65, height: 65}} source={require('../../../assets/images/lionIcon.png')}/>
            {!playBefore ?
              <Text>Stars: {userLevelDetails.stars} |  personal record: {userLevelDetails.personalRecord}</Text>
              :
              <Text>Close Level!</Text>
            }
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default LevelCrad;
