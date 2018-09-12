import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from "./LevelsMenuStyle";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import {appColors} from '../colors'

const getStarIcons = (stars) =>{
  let elements = []
  for(var i=0; i<stars ;i++)
    elements.push(<Ionicons name={'md-star'} size={25} color={appColors.backgroundButton} key={i}/>)
  for(let j=i; j<3 ;j++)
    elements.push(<Ionicons name={'md-star-outline'} size={25} color={appColors.backgroundButton} key={j}/>)
  return elements
}

class LevelCrad extends Component {
  render() {
    const {level, userLevelDetails, allUserStars, navigation} = this.props
    const disableLevel = allUserStars >= level.reqStars ? false : true
    const playBefore = userLevelDetails ? false : true
    return (
      <TouchableOpacity disabled={disableLevel} onPress={()=>{ navigation.navigate('Level',{level,userLevelDetails}) }}>
        <ImageBackground style={{width:'95%',height:'95%',}} source={require('../../../assets/images/borderLevel.png')}>
          <View style={[styles.levelContainer,disableLevel&&{opacity:0.5}]}>
            <Animatable.View style={styles.starsLine} animation="pulse" easing="ease" iterationCount="infinite">
              {getStarIcons(!playBefore ? userLevelDetails.stars : 0)}
            </Animatable.View>
            <Text>{`name: ${level.name} number level: ${level.number}`}</Text>
            <Text>Req Stars: {level.reqStars}</Text>
            <Text>time: {level.time}</Text>
            <Text>record: {level.record}</Text>
            <Text>type: {level.type}</Text>
            <Image style={{width: 100, height: 100}} source={{uri:level.img}}/>
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
