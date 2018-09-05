import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LevelView from "./LevelView";

@inject('userStore')
@observer
class Level extends Component {
  render() {
    const { userStore, navigation} = this.props;
    const { level } = navigation.state.params
    const { coins, stars, shopping } = userStore.getUser;
    return (
        <LevelView
        level={level}
        coins={coins}
        stars={stars}
        userLevels={userStore.getUserLevels}
        sound={userStore.sound}
        shoppingTime={shopping.time}
        navigation={navigation}
        />
    )
  }
}

export default Level;
