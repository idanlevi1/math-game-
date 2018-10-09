import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import styles from "./LevelsMenuStyle";
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-simple-toast';
import Stars from '../Elements/Stars'
import GrayStar from '../Elements/GrayStar'
import {questionColors} from '../colors'

class LevelCrad extends Component {

  onLevelClick = async() =>{
    const {level, navigation, userLevelDetails, allUserStars, allUserCoins, sound, AudioPlayer} = this.props
    let canPlay = true
    let msg = ''
    if(allUserStars<level.reqStars){
      canPlay = false
      msg = 'You need '+level.reqStars +' stars'
    }
    else if(allUserCoins<level.price){
      canPlay = false
      msg = 'Not enough money - the price is '+level.price +' coins'
    }
    if(canPlay){
      await AudioPlayer.clickAudioPlay(sound)
      navigation.navigate('Level',{level, userLevelDetails})
    }
    else
      Toast.show(msg)
  }

  getStarIcons = (stars) =>{
    let elements = []
    for(var i=0; i<stars ;i++)
      elements.push(<Stars withoutText size={32} key={i}/>)      
    for(let j=i; j<3 ;j++)
      elements.push(<GrayStar withoutText size={32} key={j}/>)
    return elements
  }

  render() {
    const {level, userLevelDetails, allUserStars} = this.props
    const disableLevel = allUserStars >= level.reqStars ? false : true
    const playBefore = userLevelDetails ? true : false
    const colors = Object.values(questionColors)
    const color = colors[level.number%colors.length]
    return (
      <TouchableOpacity onPress={this.onLevelClick}>
        <ImageBackground resizeMode='stretch' style={[styles.imgBGCard,disableLevel&&{opacity:0.5}]} source={require('../../../assets/images/letter.png')}>
          <View style={[styles.levelContainer,{backgroundColor:color}]}>
            {playBefore ?
            <Animatable.View style={styles.starsLine} animation="pulse" easing="ease-in" iterationCount="infinite">
              {this.getStarIcons(userLevelDetails.stars)}
            </Animatable.View>
            :
            <View style={styles.starsLine}>
              {this.getStarIcons(0)}
            </View>
            }
            <Text style={styles.cardTextTitle}>{level.number}</Text>
            <Text style={styles.cardText}>{level.name}</Text>
            <View style={styles.priceCrad}>
              <Text style={[styles.priceText,{color:color}]}>{level.price} coins</Text>
            </View>
          </View>          
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default LevelCrad;
