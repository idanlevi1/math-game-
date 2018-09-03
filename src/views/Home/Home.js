import React from "react";
import HomeView from "./HomeView";
import { observer,inject } from 'mobx-react';

@inject('userStore')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  switchSound = () => {
    this.props.userStore.switchSound();
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
