import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../colors";
import { Constants } from "expo";
const { width, height } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center",
    height: height - Constants.statusBarHeight
  },
  statusBar: {
    backgroundColor: "#FB1",
    height: Constants.statusBarHeight
  },
  logoView: {
    height: height / 2.5,
    width: width / 1.5
  },
  logoImage: {
    justifyContent: "center",
    height: "100%",
    width: "100%"
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
    justifyContent: "space-between",
  },
  iconButton: {
    backgroundColor: '#000',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: appColors.secondaryColor,
    marginHorizontal: 50,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  text: {
    fontFamily: "Indie Flower",
    fontSize: 30,
    color: "#FFFFFF",
    margin: 10
  },
  playButton: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    height: height / 8,
    width: width / 2.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: appColors.secondaryColor
  }
});
