import React from 'react';
import { View, Animated } from 'react-native';
import {appColors} from '../colors'
const splashImg = require('../../images/splash.jpg');
import InternetConnectionPopUp from './InternetConnectionPopUp'

export default class SplashScreen extends React.Component {
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3)
  }
  
  componentDidMount() {
    Animated.spring(
      this.springValue,{toValue: 1, friction: 1}
    ).start()
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: appColors.mainColor,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Animated.Image
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            transform: [{scale: this.springValue}]
          }}
          source={splashImg}
        />
        <InternetConnectionPopUp/>
      </View>
    );
  }
}
