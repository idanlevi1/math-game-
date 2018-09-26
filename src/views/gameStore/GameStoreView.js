import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from "./GameStoreStyle";
import HomeButton from '../buttons/HomeButton'

const wallBackground = require('../../../assets/images/wallYellow.jpg')

class GameStoreView extends Component {
  render() {
    const { navigation } = this.props
    return (
      <ImageBackground style={styles.backgroundContainer} source={wallBackground}>
        <View>
          <Text style={styles.textTitle}>Store</Text>
          <Text style={styles.textSubtitle}>SOON...</Text>
          <View style={styles.bottomLine}>
            <HomeButton navigation={navigation}/>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default GameStoreView;