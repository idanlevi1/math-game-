import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../colors';
import * as Animatable from 'react-native-animatable'
import Toast from 'react-native-simple-toast';
import Stars from '../CoinsStars/Stars'
import Coins from '../CoinsStars/Coins'

const logoImg = require('../../images/Logo.png');
const wallBackground = require('../../images/wall.jpg')


class HomeView extends Component {
  render() {
    const {coins,stars,sound} = this.props
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={wallBackground}
        />
        <View style={styles.rowIcons}>
            <Stars stars={stars}/>
            <Coins coins={coins}/>
        </View>
      <View style={[styles.logoView,{paddingVertical:30}]}>
          <Animatable.Image
            style={styles.logoImage}
            resizeMode='contain'
            source={logoImg}
            animation="pulse" easing="ease-out" iterationCount="infinite"
          />
        </View>
        <TouchableOpacity onPress={()=>{}}>
            <View style={styles.playButton}>
                <Text style={[styles.text,{fontSize: 50}]}>Play</Text>
            </View>
        </TouchableOpacity>
        <View style={[styles.rowIcons,{paddingTop:25}]}>
            <TouchableOpacity underlayColor='#fff' onPress={async() => {this.soundRef.jello(1000); this.props.switchSound()}}>
                <Animatable.View 
                style={styles.iconButton}
                ref={(ref)=>{this.soundRef = ref}}
                >
                <Ionicons name={sound ? 'md-volume-up' : 'md-volume-off'} size={40} color={appColors.secondaryColor}/>
                </Animatable.View>
            </TouchableOpacity>
            <TouchableOpacity underlayColor='#fff' onPress={()=>{Toast.show('Sorry, not available in this version');}} >
                <Animatable.View 
                style={styles.iconButton}
                >
                <Ionicons name={'md-globe'} size={40} color={appColors.secondaryColor}/>
                </Animatable.View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeView;
