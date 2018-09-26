import React, { Component } from "react";
import { StatusBar } from 'react-native';
import SplashView from "./SplashView";
import AppNav from "../../nav/AppNav";
import { observer, inject } from "mobx-react";
import { Asset, Font } from 'expo';
import images from '../../App/images'
import fonts from '../../App/fonts'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string')
      return Image.prefetch(image);
    else
      return Asset.fromModule(image).downloadAsync();
  });
}

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
    StatusBar.setHidden(true);
    const {userStore, levelsStore, shoppingStore} = this.props
    //loading images
    const imageAssets = cacheImages(images)
    await Promise.all([...imageAssets]);
    this.setState({progress:0.15})
    //check if user exist - load all data, if not - register user
    let existResult = await userStore.checkExistUser(Expo.Constants.deviceId)
    this.setState({progress:0.35})
    if(!existResult){
      await userStore.updateNotificationsSetting()
      this.setState({progress:0.43})
    }
    //loading levels data
    await levelsStore.loadingLevels()
    this.setState({progress:0.50})
    //loading shopping store data
    await shoppingStore.loadingShoppingItems()
    this.setState({progress:0.62})
    //loading fonts
    await Font.loadAsync(fonts);
    this.setState({progress:0.87})

    setTimeout(() => this.setState({ splash: false }),100);
    this.setState({progress:0.99})
  }

  render() {
    return this.state.splash ? <SplashView progress={this.state.progress} /> : <AppNav/>;
  }
}

export default Splash;
