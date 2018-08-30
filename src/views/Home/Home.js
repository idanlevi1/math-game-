import React from "react";
import { View } from "react-native";
import HomeView from "./HomeView";
import styles from "./HomeStyle";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.statusBar} />
        <HomeView />
      </View>
    );
  }
}
