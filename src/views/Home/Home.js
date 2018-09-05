import React from "react";
import HomeView from "./HomeView";
import { observer,inject } from 'mobx-react';

@inject('userStore')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.audioPlayer = new Expo.Audio.Sound();
  }

  componentDidMount = async() => {

    // try {
    //   await this.audioPlayer.unloadAsync()
    //   await this.audioPlayer.loadAsync(require('../../../assets/audio/pb_sunset_love.mp3'));
    //   await this.audioPlayer.setVolumeAsync(0.5)
    //   await this.audioPlayer.playAsync();
    //   await this.audioPlayer.setIsLoopingAsync(true)
    // } catch (err) {
    //   console.warn("Couldn't Play audio", err)
    // }
  };

  switchSound = async() => {
    this.props.userStore.switchSound();
    // await this.props.userStore.sound ? this.audioPlayer.playAsync() : this.audioPlayer.pauseAsync()
  }
  onPlay = () => {
    this.props.navigation.navigate('LevelsMenu')
  }
  render() {
    const {coins,stars} = this.props.userStore.getUser
    return (
      <HomeView
      switchSound={this.switchSound}
      onPlay={this.onPlay}
      coins={coins}
      stars={stars}
      sound={this.props.userStore.sound}
      navigation={this.props.navigation}
      />
    );
  }
}
