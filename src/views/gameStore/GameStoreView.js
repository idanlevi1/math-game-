import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from "./GameStoreStyle";

const wallBackground = require('../../images/wall.jpg')

class GameStoreView extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundContainer} source={wallBackground}>
        <View>
        <Text>Game Store!</Text>
        <Text>Game Store!</Text>
        <Text>Game Store!</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default GameStoreView;