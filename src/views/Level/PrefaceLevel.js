import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from "./LevelStyle";

const PrefaceLevel = (props) => {
    const {level, personalRecord, bonusTime, startPlay} = props
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
                    <TouchableOpacity style={styles.playButtonOutside} onPress={startPlay}>
                        <View style={styles.playButton}>
                            <Text style={styles.playButtonText}>Start</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ImageBackground>
     );
}
 
export default PrefaceLevel;