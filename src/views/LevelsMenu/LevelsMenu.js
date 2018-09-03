import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LevelsMenuView from "./LevelsMenuView";

@inject('userStore')
@inject('levelsStore')
@observer
class LevelsMenu extends Component {
  render() {
    const { coins, stars, userLevels } = this.props.userStore.getUser;
    return (
        <LevelsMenuView 
        coins={coins} 
        stars={stars} 
        levels={this.props.levelsStore.getLevels}
        navigation={this.props.navigation}
        userLevels={userLevels}
        getUserLevels={this.props.userStore.getUserLevels}
        />)
  }
}

export default LevelsMenu;
