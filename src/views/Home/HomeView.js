import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../colors';
import * as Animatable from 'react-native-animatable'
import Toast from 'react-native-simple-toast';
import Stars from '../Elements/Stars'
import Coins from '../Elements/Coins'
import BonusElement from '../Elements/Bonus'
import styles from "./HomeStyle";
import AdBanner from '../components/AdBanner'

const logoImg = require('../../../assets/images/Logo.png');
const wallBackground = require('../../../assets/images/wall.jpg')

export default HomeView = (props) => {
    const {coins, stars, sound, navigation, bonusStatus, userBonus, setBonus, moneyAudioPlay} = props
    return (
        <ImageBackground
          style={styles.backgroundContainer}
          source={wallBackground}
        >
            {/* STARS & COINS */}
            <View style={styles.rowIcons}>
                <Stars stars={stars} withoutAnimation/>
                <BonusElement 
                bonusStatus={bonusStatus} 
                navigation={navigation} 
                userBonus={userBonus}
                setBonus={setBonus}
                sound={sound}
                moneyAudioPlay={moneyAudioPlay}
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
            <TouchableOpacity style={styles.playButtonOutside} onPress={()=>{props.onPlay()}}>
                <View style={styles.playButton}>
                    <Text style={[styles.text,{fontSize: 44}]}>Play</Text>
                </View>
            </TouchableOpacity>
            {/* Icons Row */}
            <View style={[styles.rowIcons,{paddingTop:25,marginHorizontal:25,}]}>
                {/* Sound */}
                <Animatable.View animation={"slideInLeft"} iterationCount={1} duration={1250}>
                    <TouchableOpacity underlayColor='#fff' onPress={() => {this.soundRef.shake(400); props.switchSound()}}>
                        <Animatable.View 
                        style={styles.iconButton}
                        ref={(ref)=>{this.soundRef = ref}}
                        >
                        <Ionicons name={sound ? 'md-volume-up' : 'md-volume-off'} size={40} color={appColors.lionColorDark}/>
                        </Animatable.View>
                    </TouchableOpacity>
                </Animatable.View>
                {/* Game Store */}
                <Animatable.View animation={"slideInUp"} iterationCount={1} duration={1250}>
                    <TouchableOpacity underlayColor='#fff' onPress={() => {
                        this.store.bounce(500); 
                        navigation.navigate('GameStore',{navigation:navigation})
                        }}>
                        <Animatable.View 
                        style={styles.iconButton}
                        ref={(ref)=>{this.store = ref}}
                        >
                        <Ionicons name={'ios-basket-outline'} size={40} color={appColors.lionColorDark}/>
                        </Animatable.View>
                    </TouchableOpacity>
                </Animatable.View>
                {/* language */}
                <Animatable.View animation={"slideInRight"} iterationCount={1} duration={1250}>
                    <React.Fragment>
                        <Text style={styles.newLabel}>New!</Text>
                        <TouchableOpacity underlayColor='#fff' onPress={() => { navigation.navigate('BoardGame',{navigation:navigation}) }}>
                            <View style={styles.iconButton}>
                                <Ionicons name={'md-trophy'} size={40} color={appColors.lionColorDark}/>
                            </View>
                        </TouchableOpacity>
                    </React.Fragment>
                </Animatable.View>
            </View>
            <AdBanner/>
        </ImageBackground>
    )
}