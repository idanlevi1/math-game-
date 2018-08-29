import React, { Component } from "react";
import SplashView from "./SplashView";
import AppNav from "../../nav/AppNav";
import { observer } from "mobx-react";

@observer
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { splash: true };
  }

  async componentDidMount() {
    const {user} = this.props.store
    let existResult = await this.props.store.checkExistUser(Expo.Constants.deviceId)
    setTimeout(() => this.setState({ splash: false }), 2000);
  }

  render() {
    return this.state.splash ? <SplashView /> : <AppNav />;
  }
}

export default Splash;
