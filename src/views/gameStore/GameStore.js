import React, { Component } from "react";
import GameStoreView from "./GameStoreView";
import {buy} from './GameStoreService';
import { observer,inject } from 'mobx-react';

@inject('userStore')
@inject('shoppingStore')
@observer
class GameStore extends Component {
  
  handleBuy = async(item) =>{
    const { userStore } = this.props
    await buy(item,userStore)
  }

  render() {
    const { shoppingStore, userStore } = this.props
    const {navigation} = this.props.navigation.state.params
    return (
        <GameStoreView 
        items={shoppingStore.shoppingItems}
        onBuy={this.handleBuy}
        navigation={navigation}
        userCoins={userStore.getUser.coins}
        />
    )
  }
}

export default GameStore;
