import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import styles from "./LevelsMenuStyle";
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-simple-toast';
import Stars from '../Elements/Stars'
import {questionColors} from '../colors'

class LevelCrad extends Component {

  onLevelClick = () =>{
    const {level, navigation,userLevelDetails,allUserStars} = this.props
    if(allUserStars>=level.reqStars)
      navigation.navigate('Level',{level,userLevelDetails})
    else
      Toast.show('For this level you need '+level.reqStars +' stars')
  }

  getStarIcons = (stars) =>{
    let elements = []
    for(var i=0; i<stars ;i++)
      elements.push(<Stars withoutText emptyStar={false} size={33} key={i}/>)
    for(let j=i; j<3 ;j++)
      elements.push(<Stars withoutText emptyStar size={33} key={j}/>)
    return elements
  }

  render() {
    const {level, userLevelDetails, allUserStars} = this.props
    const disableLevel = allUserStars >= level.reqStars ? false : true
    const playBefore = userLevelDetails ? false : true
    const colors = Object.values(questionColors)
    const color = colors[level.number%colors.length]
    return (
      <TouchableOpacity onPress={this.onLevelClick}>
        <ImageBackground resizeMode='stretch' style={[styles.imgBGCard,disableLevel&&{opacity:0.5}]} source={require('../../../assets/images/letter.png')}>
          <View style={[styles.levelContainer,{backgroundColor:color}]}>
            <Animatable.View style={styles.starsLine} animation="pulse" easing="ease-in" iterationCount="infinite">
              {this.getStarIcons(!playBefore ? userLevelDetails.stars : 0)}
            </Animatable.View>
            <Text style={styles.cardTextTitle}>{level.number}</Text>
            <Text style={styles.cardText}>{level.name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default LevelCrad;
