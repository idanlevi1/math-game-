import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import InternetConnectionPopUp from "./InternetConnectionPopUp";
import * as Progress from 'react-native-progress';
import {appColors} from '../colors'

export default class SplashScreen extends React.Component {
  state = {
    opacity: new Animated.Value(1)
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0.8,
      duration: 800,
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
                    inputRange: [0,0.7],
                    outputRange: [0,0.8]
                  })
                }
              ]
            },
            styles.splash
          ]}
          source={require("../../images/splash.png")}
        />
        <View style={styles.progressCircle}>
          <Progress.Circle 
            progress={this.props.progress}
            showsText
            formatText={()=>this.props.progress*100+'%'}
            endAngle={1}
            size={100}
            color={appColors.backgroundButton}
            unfilledColor={appColors.lionColor}
            thickness={12}
          />
        </View>
        <InternetConnectionPopUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: appColors.splashBackgound,
    alignItems: "center",
    justifyContent: "center",
  },
  splash: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  },
  progressCircle:{
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: 'absolute',
    top: '80%',
  },
});
