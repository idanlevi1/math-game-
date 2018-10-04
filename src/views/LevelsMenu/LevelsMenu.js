import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LevelsMenuView from "./LevelsMenuView";

@inject('userStore')
@inject('levelsStore')
@observer
class LevelsMenu extends Component {
  render() {
    const { levelsStore, userStore ,navigation } = this.props;
    const { coins, stars } = userStore.getUser;
    return (
      <LevelsMenuView 
      coins={coins} 
      stars={stars} 
      levels={levelsStore.getLevels}
      navigation={navigation}
      userLevels={userStore.getUserLevels}
      sound={userStore.sound}
      AudioPlayer={userStore.AudioPlayer}
      />
    )
  }
}

export default LevelsMenu;
