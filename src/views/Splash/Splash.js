import React, { Component } from "react";
import SplashView from "./SplashView";
import AppNav from "../../nav/AppNav";
import { observer, inject } from "mobx-react";
import { Font } from 'expo';

@inject('userStore')
@inject('levelsStore')
@inject('shoppingStore')
@observer

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { splash: true, progress:0 };
  }

  async componentDidMount() {
    const {userStore, levelsStore, shoppingStore} = this.props
    let existResult = await userStore.checkExistUser(Expo.Constants.deviceId)
    this.setState({progress:0.35})
    let loadingTime = existResult ? 1000 : 2000
    await levelsStore.loadingLevels()
    this.setState({progress:0.50})
    await shoppingStore.loadingShoppingItems()
    this.setState({progress:0.76})
    await Font.loadAsync({
      'Indie Flower': require('../../../assets/fonts/IndieFlower.ttf'),
    });
    this.setState({progress:loadingTime>1000 ? 0.79 : 0.88 })
    setTimeout(() => this.setState({ splash: false }),loadingTime);
    this.setState({progress:0.99})
  }

  render() {
    return this.state.splash ? <SplashView progress={this.state.progress} /> : <AppNav/>;
  }
}

export default Splash;
