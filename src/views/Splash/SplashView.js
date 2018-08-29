import React from 'react';
import { View, Image } from 'react-native';
const splashImg = require('../../images/splash.jpg');
import InternetConnectionPopUp from './InternetConnectionPopUp'

export default class SplashScreen extends React.Component {

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}
          source={splashImg}
        />
        <InternetConnectionPopUp/>
      </View>
    );
  }
}
