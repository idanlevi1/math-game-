import React from "react";
import HomeView from "./HomeView";
import { observer,inject } from 'mobx-react';

@inject('userStore')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={bonusStatus:true}
  }

  componentDidMount = async() => {
    //Calculate BONUS status
    let bonus = this.props.userStore.getUser.bonus
    if(bonus){
      let lastDay = new Date()
      lastDay.setHours(lastDay.getHours() - 12); //subtract 12 hours
      if(new Date(bonus)>lastDay)
        this.setState({bonusStatus:false})
    }
  };

  handleSetBonus = (coins) =>{
    this.props.userStore.setBonus(coins)
    this.setState({bonusStatus:false})
  }

  switchSound = async() => {
    this.props.userStore.switchSound();
  }
  onPlay = async() => {
    const {AudioPlayer, sound} = this.props.userStore
    await AudioPlayer.clickAudioPlay(sound)
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
      moneyAudioPlay={this.props.userStore.AudioPlayer.moneyAudioPlay}
      />
    );
  }
}
