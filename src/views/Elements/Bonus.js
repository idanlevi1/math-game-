import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./ElementsStyles";
import AnimatableImage from '../components/AnimatableImage'
import Toast from 'react-native-simple-toast';

export default BonusElement = props => {
    bonusAction = () => {
        if(props.bonusStatus)
            props.navigation.navigate('Bonus',{
                setBonus:props.setBonus,
                navigation:props.navigation,
                sound: props.sound,
                moneyAudioPlay: props.moneyAudioPlay,
            })
        else{
            //Calculate BONUS time left
            let bonus = props.userBonus
            let msg = 'New bonus! Please refresh and get it'
            let lastDay = new Date()
            let bonusDate = new Date(bonus)
            lastDay.setHours(lastDay.getHours() - 12);
            if(bonusDate>lastDay){
                let nextBonusTime = (bonusDate - lastDay)/(3600*1000)
                let nextBonusHours = Math.floor(nextBonusTime)
                let nextBonusMinutes = Math.floor((nextBonusTime % 1)*60)
                msg = 'New bonus every 12 hours\n' + nextBonusHours + ' hours and ' + nextBonusMinutes + ' minutes left for the next bonus'
            }
            Toast.show(msg,Toast.LONG,Toast.TOP)
        }
    }

    return (
        <TouchableOpacity onPress={this.bonusAction}>
            <View style={styles.card}>
                {
                    props.bonusStatus ?
                    <AnimatableImage
                    width={55}
                    height={55}
                    source={require('../../../assets/images/bonus.png')}
                    />
                    :
                    <Image
                    style={{width:45,height:45}} 
                    resizeMode='contain' 
                    source={require('../../../assets/images/bonusGray.png')}
                    />
                }
                <Text style={[styles.text,{color:props.bonusStatus?'#EA5331':'#B5B5B5'}]}>Bonus</Text>
            </View>
        </TouchableOpacity>
    );
};