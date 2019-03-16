import React from "react";
import { View, Animated, StyleSheet, Text, Dimensions } from "react-native";
import InternetConnectionPopUp from "./InternetConnectionPopUp";
import * as Progress from 'react-native-progress';
import {appColors} from '../colors'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get("screen");
const VERSION = '1.0.3'

export default class SplashScreen extends React.Component {

  animated = new Animated.Value(1)
  componentDidMount() {
    Animated.timing(this.animated, {
      toValue: 0,
      duration: 1500,
    }).start();
  };

  render() {
    const translateX = this.animated.interpolate({
      inputRange: [0,1],
      outputRange: [width ,0]
    })
    const translateY = this.animated.interpolate({
      inputRange: [0,1],
      outputRange: [height*1.5,0]
    })
    return (
      <View style={{flex:1,backgroundColor: appColors.mainColor,}}>
        <View style={styles.container}>
          <Animated.View style={[styles.inside,{transform:[{translateX},{translateY}]}]}>
            <InternetConnectionPopUp />
          </Animated.View>
        </View>
        <Animatable.Image
        style={styles.splashLogo}
        source={require("../../../assets/images/Logo.png")}
        resizeMode='contain'
        animation={"slideInDown"} iterationCount={1} duration={1500}
        />
        <View style={styles.progressCircle}>
          <Progress.Circle 
            progress={this.props.progress}
            showsText
            formatText={()=>this.props.progress*100+'%'}
            endAngle={1}
            size={100}
            color={appColors.lionOrange}
            unfilledColor={appColors.lionColor}
            thickness={12}
          />
          <Text style={styles.versionText}>Version {VERSION}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:appColors.splashBackgound,
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  inside: {
    backgroundColor: appColors.lionColorDark,
    borderRadius: height,
    width: height*2,
    height: height*2,
  },
  splashLogo: {
    alignSelf: "center",
    position: 'absolute',
    top: '25%',
    zIndex:998,
    width: height*0.6,
    height: width * 0.6,
  },
  progressCircle:{
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: 'absolute',
    top: '70%',
    zIndex:999,
  },
  versionText:{
    fontSize:12,
    marginTop:25,
    textAlign:'center',
    color:appColors.lionOrange,
  }
});