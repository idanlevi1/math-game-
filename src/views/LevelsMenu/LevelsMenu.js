import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { observer, inject } from "mobx-react";
import LevelsMenuView from "./LevelsMenuView";

@inject("userStore")
@observer
class LevelsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { coins, stars } = this.props.userStore.getUser;
    return (
        <LevelsMenuView 
        coins={coins} 
        stars={stars} 
        />)
  }
}

export default LevelsMenu;
