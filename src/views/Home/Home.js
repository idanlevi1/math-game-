import React from "react";
import {BackHandler, Platform} from 'react-native'
import HomeView from "./HomeView";
import { observer,inject } from 'mobx-react';
import {adInterstitial} from '../components/AdInterstitial'
import Toast from 'react-native-simple-toast';

@inject('userStore')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      bonusStatus:true,
      exit:0
    }
    this.onBackClicked = this._onBackClicked.bind(this);
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
    //Back Press (android)
    if (Platform.OS === 'android') 
      BackHandler.addEventListener('hardwareBackPress', this.onBackClicked);
  };

  _onBackClicked = () => {
    const tryToPop = this.props.navigation.pop();
    if (!tryToPop) {
      if (this.state.exit > 0) {
        adInterstitial();
        BackHandler.exitApp();
      } else {
        Toast.show("Clicking the back button twice to exit.");
        this.setState({ exit: 1 });
        setTimeout(() => this.setState({ exit: 0 }), 1500);
      }
    }
    return true;
  } 

  componentWillUnmount() {
    if (Platform.OS === 'android')
      BackHandler.removeEventListener("hardwareBackPress", this.onBackClicked);
  }

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

export default Home