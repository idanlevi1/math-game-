import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./ElementsStyles";
import AnimatableImage from '../components/AnimatableImage'
import Toast from 'react-native-simple-toast';

export default BonusElement = props => {
    bonusAction = () => {
        if(props.bonusStatus)
            props.navigation.navigate('Bonus')
        else{
            //Calculate BONUS time left
            let bonus = props.userBonus
            let msg = 'New bonus! Please refresh and get it'
            let lastDay = new Date()
            lastDay.setDate(lastDay.getDate()-1);
            if(bonus>lastDay){
                let nextBonusTime = (bonus - lastDay)/(3600*1000)
                let nextBonusHours = Math.floor(nextBonusTime)
                let nextBonusMinutes = Math.floor((nextBonusTime % 1)*60)
                msg = 'New bonus every 24 hours\n' + nextBonusHours + ' hours and ' + nextBonusMinutes + ' minutes left for the next bonus'
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
                    source={require('../../../assets/images/bonusDisable.png')}
                    />
                }
                
            </View>
        </TouchableOpacity>
    );
};