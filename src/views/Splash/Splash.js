import React, { Component } from "react";
import SplashView from "./SplashView";
import AppNav from "../../nav/AppNav";
import { observer, inject } from "mobx-react";
import { Font } from 'expo';

@inject('userStore')
@inject('levelsStore')
@observer

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { splash: true};
  }

  async componentDidMount() {
    const {userStore,levelsStore} = this.props
    let existResult = await userStore.checkExistUser(Expo.Constants.deviceId)
    let loadingTime = existResult ? 1000 : 2000
    await levelsStore.loadingLevels()
    await Font.loadAsync({
      'Indie Flower': require('../../../assets/fonts/IndieFlower.ttf'),
    });
    setTimeout(() => this.setState({ splash: false }),loadingTime);
  }

  render() {
    return this.state.splash ? <SplashView /> : <AppNav/>;
  }
}

export default Splash;
