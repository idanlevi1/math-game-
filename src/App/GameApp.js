import React, { Component } from 'react'
import Splash from '../views/Splash/Splash'
import initdb from './initDB'
import userStore from '../store/userStore'
import { Provider } from 'mobx-react';

export default class GameApp extends Component {
    componentWillMount() {
      initdb();
    }

    render() {
      return (
        <Provider userStore={userStore}>
          <Splash />
        </Provider>
      );
    }
  }