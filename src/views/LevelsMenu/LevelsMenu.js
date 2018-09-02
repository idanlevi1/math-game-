import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LevelsMenuView from "./LevelsMenuView";

@inject('userStore')
@inject('levelsStore')
@observer
class LevelsMenu extends Component {
  render() {
    const { coins, stars } = this.props.userStore.getUser;
    return (
        <LevelsMenuView 
        coins={coins} 
        stars={stars} 
        levels={this.props.levelsStore.getLevels}
        />)
  }
}

export default LevelsMenu;
