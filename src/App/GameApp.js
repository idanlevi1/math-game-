import React, { Component } from 'react'
import Splash from '../views/Splash/Splash'
import initdb from './initDB'
import store from '../store/ListStore'

export default class GameApp extends Component {
    componentWillMount() {
      initdb();
    }

    render() {
      return (
        <Splash store={store}/>
      );
    }
  }