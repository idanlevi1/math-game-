import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from "./LevelsMenuStyle";

class Level extends Component {
  render() {
    return (
      <View style={styles.levelContainer}>
        <Text>{this.props.level.name}</Text>
        <Text>{this.props.level.number}</Text>
        <Text>{this.props.level.number}</Text>
        <Text>{this.props.level.record}</Text>
        <Text>{this.props.level.type}</Text>
      </View>

    );
  }
}

export default Level;
