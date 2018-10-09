import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from "./LevelStyle";
import AdBanner from '../components/AdBanner'

export default class PrefaceLevel extends Component {
    state = {disabledPlay:false}
    render() {
    const {level, personalRecord, bonusTime, startPlay} = this.props
    return (
        <ImageBackground resizeMode={"stretch"} style={styles.prefaceLevelContainer} source={require('../../../assets/images/wallBez.jpg')}>
            <ImageBackground resizeMode={"stretch"} style={styles.prefaceLevelContainer} source={require('../../../assets/images/prefaceLevelBorder.png')}>
                <View style={styles.viewContanerPreface}>
                    <Text style={styles.prefaceTextTitle}>{level.number}#</Text>
                    <Text style={styles.prefaceTextTitle}>{level.name}</Text>
                    <Text style={styles.prefaceText}>Type: {level.type}</Text>
                    <Text style={styles.prefaceText}>Game Time: {level.time}</Text>
                    <Text style={styles.prefaceText}>Record: {level.record} Second</Text>
                    {personalRecord!=1000 && <Text style={styles.prefaceText}>Your Record: {personalRecord} Second</Text>}
                    <Text style={styles.prefaceText}>Bonus Time: {bonusTime} Second</Text>
                    <TouchableOpacity style={styles.playButtonOutside} onPress={()=> {this.setState({disabledPlay:true}); startPlay() }} disabled={this.state.disabledPlay}>
                        <View style={styles.playButton}>
                        {!this.state.disabledPlay ? 
                            <Text style={styles.playButtonText}>Start</Text>
                            :
                            <ActivityIndicator size="large" color="#FF8333" style={{margin: 10}} />
                        }
                        </View>
                    </TouchableOpacity>
                    <AdBanner marginTop={0} bannerType="largeBanner"/>
                </View>
            </ImageBackground>
        </ImageBackground>
     );
    }
}