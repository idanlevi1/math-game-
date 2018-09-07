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
    if(!existResult){
      await userStore.updateNotificationsSetting()
      this.setState({progress:0.43})
    }
    await levelsStore.loadingLevels()
    this.setState({progress:0.50})
    await shoppingStore.loadingShoppingItems()
    this.setState({progress:0.76})
    await Font.loadAsync({
      'Indie Flower': require('../../../assets/fonts/IndieFlower.ttf'),
      'Denk One': require('../../../assets/fonts/DenkOne-Regular.ttf'),
      'Fredericka the Great': require('../../../assets/fonts/FrederickatheGreat-Regular.ttf'),
      'Merienda': require('../../../assets/fonts/Merienda-Regular.ttf'),
      'Merienda bold': require('../../../assets/fonts/Merienda-Bold.ttf'),
    });
    this.setState({progress:0.87})
    setTimeout(() => this.setState({ splash: false }),100);
    this.setState({progress:0.99})
  }

  render() {
    return this.state.splash ? <SplashView progress={this.state.progress} /> : <AppNav/>;
  }
}

export default Splash;
