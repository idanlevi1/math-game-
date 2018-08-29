import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {appColors,whiteText} from '../colors'
import { Constants } from 'expo';

const { width, height,  } = Dimensions.get('screen');

export default class Home extends React.Component {
  render() {
    console.log(Expo.Constants.deviceId)
    return (
      <View>
        <View style={styles.statusBar} />        
        <View style={styles.container}>
          <Text style={whiteText}>Home Screen...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: height-Constants.statusBarHeight,
  },
  statusBar: {
    backgroundColor: '#FFCC00',
    height: Constants.statusBarHeight 
  },
});
