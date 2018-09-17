import React, { Component } from 'react'
import GameApp from './src/App/GameApp'
import _ from 'lodash';

export default class App extends Component {
  componentDidMount = () => {
    console.ignoredYellowBox = ['Setting a timer'];
    const _console = _.clone(console);
    console.warn = message => {
      if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
      }
    };
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  };
  
  render() {
    return (
      <GameApp/>
    );
  }
}