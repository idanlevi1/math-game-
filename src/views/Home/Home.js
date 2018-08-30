import React from "react";
import { View } from "react-native";
import HomeView from "./HomeView";
import styles from "./HomeStyle";
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

  render() {
    const {coins,stars} = this.props.userStore.getUser
    return (
      <View>
        <View style={styles.statusBar} />
        <HomeView
        switchSound={this.switchSound}
        coins={coins}
        stars={stars}
        sound={this.props.userStore.sound}
        />
      </View>
    );
  }
}
