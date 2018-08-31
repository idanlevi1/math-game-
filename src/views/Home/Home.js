import React from "react";
import { View } from "react-native";
import HomeView from "./HomeView";
import styles from "./HomeStyle";
import { observer,inject } from 'mobx-react';
import LevelsMenu from '../LevelsMenu/LevelsMenu'

@inject('userStore')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={play:false}
  }
  switchSound = () => {
    this.props.userStore.switchSound();
  }
  onPlay = () => {
    this.setState({play:true})
  }
  render() {
    const {coins,stars} = this.props.userStore.getUser
    return (
      !this.state.play ?
      <View>
        <View style={styles.statusBar} />
        <HomeView
        switchSound={this.switchSound}
        onPlay={this.onPlay}
        coins={coins}
        stars={stars}
        sound={this.props.userStore.sound}
        />
      </View>
      :
      <LevelsMenu/>
    );
  }
}
