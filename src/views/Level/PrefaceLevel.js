import React from 'react';
import {View, Text, ImageBackground, ActivityIndicator } from 'react-native';
import styles from "./LevelStyle";

const PrefaceLevel = (props) => {
    console.log(props.level)
    const {level,personalRecord,bonusTime} = props
    return (
        <ImageBackground resizeMode={"stretch"} style={styles.prefaceLevelContainer} source={require('../../../assets/images/wallBez.jpg')}>
            <ImageBackground resizeMode={"stretch"} style={styles.prefaceLevelContainer} source={require('../../../assets/images/prefaceLevelBorder.png')}>
                <View style={styles.viewContanerPreface}>
                    <Text style={styles.prefaceTextTitle}>{level.number}#</Text>
                    <Text style={styles.prefaceTextTitle}>{level.name}</Text>
                    <Text style={styles.prefaceText}>Type: {level.type}</Text>
                    <Text style={styles.prefaceText}>Game Time: {level.time}</Text>
                    <Text style={styles.prefaceText}>Record: {level.record} Second</Text>
                    {personalRecord!=999 && <Text style={styles.prefaceText}>Your Record: {personalRecord} Second</Text>}
                    <Text style={styles.prefaceText}>Bonus Time: {bonusTime} Second</Text>

                    <ActivityIndicator style={{marginTop: 40}} size='large' color='#FFFFFF' /> 
                </View>
            </ImageBackground>
        </ImageBackground>
     );
}
 
export default PrefaceLevel;