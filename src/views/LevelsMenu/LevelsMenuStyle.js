import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../colors";
import { Constants } from "expo";
const { width, height } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center",
    height: height,
    opacity:0.6,
  },
  levelsView: {
    height: height / 2.5,
    width: width / 1.5
  },
  backgroundImage: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  },
  rowIcons: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between"
  },
});
