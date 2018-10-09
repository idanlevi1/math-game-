import React, { Component } from 'react'
import Splash from '../views/Splash/Splash'
import initdb from './initDB'
import userStore from '../store/userStore'
import levelsStore from '../store/levelsStore'
import shoppingStore from '../store/shoppingStore'
import { Provider } from 'mobx-react';

export default class GameApp extends Component {
    componentDidMount() {
      initdb();
    }

    render() {
      return (
        <Provider 
        userStore={userStore}
        levelsStore={levelsStore}
        shoppingStore={shoppingStore}
        >
          <Splash />
        </Provider>
      );
    }
  }