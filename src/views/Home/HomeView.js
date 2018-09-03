import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../colors';
import * as Animatable from 'react-native-animatable'
import Toast from 'react-native-simple-toast';
import Stars from '../CoinsStars/Stars'
import Coins from '../CoinsStars/Coins'
import styles from "./HomeStyle";

const logoImg = require('../../images/Logo.png');
const wallBackground = require('../../images/wall.jpg')


class HomeView extends Component {
  render() {
    const {coins,stars,sound} = this.props
    return (
        <ImageBackground
          style={styles.backgroundContainer}
          source={wallBackground}
        >
            {/* STARS & COINS */}
            <View style={styles.rowIcons}>
                <Stars stars={stars}/>
                <Coins coins={coins}/>
            </View>
            {/* LOGO */}
            <View style={styles.logoView}>
                <Animatable.Image
                    style={styles.logoImage}
                    resizeMode='contain'
                    source={logoImg}
                    animation="pulse" easing="ease-out" iterationCount="infinite"
                />
            </View>
            {/* Play Button */}
            <TouchableOpacity onPress={()=>{this.props.onPlay()}}>
                <View style={styles.playButton}>
                    <Text style={[styles.text,{fontSize: 50}]}>Play</Text>
                </View>
            </TouchableOpacity>
            {/* Icons Row */}
            <View style={[styles.rowIcons,{paddingTop:25}]}>
                <TouchableOpacity underlayColor='#fff' onPress={() => {this.soundRef.jello(1000); this.props.switchSound()}}>
                    <Animatable.View 
                    style={styles.iconButton}
                    ref={(ref)=>{this.soundRef = ref}}
                    >
                    <Ionicons name={sound ? 'md-volume-up' : 'md-volume-off'} size={40} color={appColors.secondaryColor}/>
                    </Animatable.View>
                </TouchableOpacity>
                <TouchableOpacity underlayColor='#fff' onPress={() => {this.store.jello(1000); this.props.navigation.navigate('GameStore')}}>
                    <Animatable.View 
                    style={styles.iconButton}
                    ref={(ref)=>{this.store = ref}}
                    >
                    <Ionicons name={'ios-basket-outline'} size={40} color={appColors.secondaryColor}/>
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
        </ImageBackground>
    );
  }
}

export default HomeView;
