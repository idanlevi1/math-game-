import React from "react";
import { AdMobBanner } from "expo";
import { View, StyleSheet, Dimensions, ImageBackground, Text} from "react-native";
const { height } = Dimensions.get("screen");

export default (AdBannerCircle = props => {
  const styles = StyleSheet.create({
    imgBGCard: {
      width: height * 0.3,
      height: height * 0.3
    },
    levelContainer: {
      marginTop: height * 0.04,
      marginLeft: height * 0.04,
      borderRadius: 100,
      borderWidth: 1,
      height: height * 0.22,
      width: height * 0.22,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000"
    },
    adContainer: {
      width: height * 0.15,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center"
    },
    adText: {
      color: "#FFF",
      fontSize: 18,
      position: "absolute"
    }
  });

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.imgBGCard}
      source={require("../../../assets/images/letter.png")}
    >
      <View style={styles.levelContainer}>
        <View style={styles.adContainer}>
          <Text style={styles.adText}>Ad</Text>
          <AdMobBanner
            bannerSize={props.bannerType ? props.bannerType : "banner"}
            adUnitID="ca-app-pub-1289259032515994/8810586795"
            onDidFailToReceiveAdWithError={err => {console.log("error banner", err)}}
          />
        </View>
      </View>
    </ImageBackground>
  );
});
