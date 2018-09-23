import React from "react";
import HomeView from "./HomeView";
import { observer,inject } from 'mobx-react';

@inject('userStore')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={bonusStatus:true}
    // this.audioPlayer = new Expo.Audio.Sound();
  }

  componentDidMount = async() => {
    //Calculate BONUS status
    let bonus = this.props.userStore.getUser.bonus
    if(bonus){
      let lastDay = new Date()
      lastDay.setDate(lastDay.getDate()-1);
      if(new Date(bonus)>lastDay)
        this.setState({bonusStatus:false})
    }
    
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

  handleSetBonus = (coins) =>{
    this.props.userStore.setBonus(coins)
    this.setState({bonusStatus:false})
  }

  switchSound = async() => {
    this.props.userStore.switchSound();
    // await this.props.userStore.sound ? this.audioPlayer.playAsync() : this.audioPlayer.pauseAsync()
  }
  onPlay = () => {
    this.props.navigation.navigate('LevelsMenu')
  }
  render() {
    const {coins,stars,bonus} = this.props.userStore.getUser
    return (
      <HomeView
      switchSound={this.switchSound}
      onPlay={this.onPlay}
      coins={coins}
      stars={stars}
      sound={this.props.userStore.sound}
      navigation={this.props.navigation}
      bonusStatus= {this.state.bonusStatus}
      userBonus={bonus}
      setBonus={this.handleSetBonus}
      />
    );
  }
}
