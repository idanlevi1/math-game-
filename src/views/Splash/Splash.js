import React, { Component } from "react";
import SplashView from "./SplashView";
import AppNav from "../../nav/AppNav";
import { observer } from "mobx-react";

@observer
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { splash: true};
  }

  async componentDidMount() {
    const {user} = this.props.store
    let existResult = await this.props.store.checkExistUser(Expo.Constants.deviceId)
    let loadingTime = existResult ? 1000 : 2000
    console.log("user:",user)
    setTimeout(() => this.setState({ splash: false }), loadingTime);
  }

  render() {
    return this.state.splash ? <SplashView /> : <AppNav />;
  }
}

export default Splash;
