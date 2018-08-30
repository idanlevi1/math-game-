import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import InternetConnectionPopUp from "./InternetConnectionPopUp";
const splashImg = require("../../images/splash.jpg");

export default class SplashScreen extends React.Component {
  state = {
    opacity: new Animated.Value(1)
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0.8,
      duration: 2500,
      useNativeDriver: true
    }).start();
  };
  render() {
    return (
      <View style={styles.contain}>
        <Animated.Image
          onLoad={this.onLoad}
          style={[
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0.3, 0.8],
                    outputRange: [0.5, 1]
                  })
                }
              ]
            },
            styles.splash
          ]}
          source={splashImg}
        />
        <InternetConnectionPopUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  splash: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  }
});
