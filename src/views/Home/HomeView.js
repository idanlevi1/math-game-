import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../colors';
import * as Animatable from 'react-native-animatable'
import Toast from 'react-native-simple-toast';
import Stars from '../Elements/Stars'
import Coins from '../Elements/Coins'
import BonusElement from '../Elements/Bonus'
import styles from "./HomeStyle";

const logoImg = require('../../../assets/images/Logo.png');
const wallBackground = require('../../../assets/images/wall.jpg')

class HomeView extends Component {
  render() {
    const {coins, stars, sound, navigation, bonusStatus, userBonus, setBonus} = this.props
    return (
        <ImageBackground
          style={styles.backgroundContainer}
          source={wallBackground}
        >
            {/* STARS & COINS */}
            <View style={styles.rowIcons}>
                <Stars stars={stars}/>
                <BonusElement 
                bonusStatus={bonusStatus} 
                navigation={navigation} 
                userBonus={userBonus}
                setBonus={setBonus}
                />
                <Coins coins={coins}/>
            </View>
            {/* LOGO */}
            <View style={styles.logoView}>
                <Animatable.Image
                    style={styles.logoImage}
                    resizeMode='contain'
                    source={logoImg}
                    animation={"pulse"} easing="ease-out" iterationCount="infinite"
                />
            </View>
            {/* Play Button */}
            <TouchableOpacity style={styles.playButtonOutside} onPress={()=>{this.props.onPlay()}}>
                <View style={styles.playButton}>
                    <Text style={[styles.text,{fontSize: 44}]}>Play</Text>
                </View>
            </TouchableOpacity>
            {/* Icons Row */}
            <View style={[styles.rowIcons,{paddingTop:25,marginHorizontal:25,}]}>
                <TouchableOpacity underlayColor='#fff' onPress={() => {this.soundRef.shake(400); this.props.switchSound()}}>
                    <Animatable.View 
                    style={styles.iconButton}
                    ref={(ref)=>{this.soundRef = ref}}
                    >
                    <Ionicons name={sound ? 'md-volume-up' : 'md-volume-off'} size={40} color={appColors.lionColorDark}/>
                    </Animatable.View>
                </TouchableOpacity>
                <TouchableOpacity underlayColor='#fff' onPress={() => {this.store.bounce(500); navigation.navigate('GameStore')}}>
                    <Animatable.View 
                    style={styles.iconButton}
                    ref={(ref)=>{this.store = ref}}
                    >
                    <Ionicons name={'ios-basket-outline'} size={40} color={appColors.lionColorDark}/>
                    </Animatable.View>
                </TouchableOpacity>
                <TouchableOpacity underlayColor='#fff' onPress={()=>{Toast.show('Sorry, not available in this version');}} >
                    <Animatable.View 
                    style={styles.iconButton}
                    >
                    <Ionicons name={'md-globe'} size={40} color={appColors.lionColorDark}/>
                    </Animatable.View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
  }
}

export default HomeView;
