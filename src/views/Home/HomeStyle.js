import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../colors";
const { width, height } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    height: height / 2.5,
    width: width / 1.5
  },
  logoImage: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
    opacity:0.9
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
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    backgroundColor: '#000',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: appColors.secondaryColor,
    marginHorizontal: 15,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  text: {
    fontFamily: "Fredericka the Great",
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
