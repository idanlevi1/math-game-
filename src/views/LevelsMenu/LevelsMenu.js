import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LevelsMenuView from "./LevelsMenuView";

@inject('userStore')
@inject('levelsStore')
@observer
class LevelsMenu extends Component {
  render() {
    const { coins, stars } = this.props.userStore.getUser;
    const { levelsStore, userStore ,navigation } = this.props;
    return (
      <LevelsMenuView 
      coins={coins} 
      stars={stars} 
      levels={levelsStore.getLevels}
      navigation={navigation}
      userLevels={userStore.getUserLevels}
      />
    )
  }
}

export default LevelsMenu;
