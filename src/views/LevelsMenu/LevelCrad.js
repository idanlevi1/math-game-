import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from "./LevelsMenuStyle";
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-simple-toast';
import Stars from '../Elements/Stars'

class LevelCrad extends Component {

  onLevelClick = () =>{
    const {level, navigation,userLevelDetails,allUserStars} = this.props
    if(allUserStars>=level.reqStars)
      navigation.navigate('Level',{level,userLevelDetails})
    else
      Toast.show('For this level you need '+level.reqStars +' star' + (level.reqStars>1? 's':''))
  }

  getStarIcons = (stars) =>{
    let elements = []
    for(var i=0; i<stars ;i++)
      elements.push(<Stars withoutText emptyStar={false} size={35} key={j}/>)
    for(let j=i; j<3 ;j++)
      elements.push(<Stars withoutText emptyStar size={35} key={j}/>)
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
            <Animatable.View style={styles.starsLine} animation="pulse" easing="ease-in" iterationCount="infinite">
              {this.getStarIcons(!playBefore ? userLevelDetails.stars : 0)}
            </Animatable.View>
            <Text style={styles.cardTextTitle}>{level.number}</Text>
            <Text style={styles.cardText}>{level.name}</Text>
            <Image style={{width: 65, height: 65}} source={require('../../../assets/images/lionIcon.png')}/>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default LevelCrad;
