import React, { Component } from "react";
import GameStoreView from "./GameStoreView";

class GameStore extends Component {
  render() {
    const {navigation} = this.props.navigation.state.params
    return (
        <GameStoreView navigation={navigation}/>
    )
  }
}

export default GameStore;
