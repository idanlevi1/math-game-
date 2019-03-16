import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../colors";
const { width, height } = Dimensions.get("screen");

export default (styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    backgroundColor: appColors.mainColor
  },
  logoView: {
    height: height / 2.5,
    width: width / 1.5,
    alignSelf: "center"
  },
  logoImage: {
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
    justifyContent: "space-around"
  },
  iconButton: {
    backgroundColor: "#000",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: appColors.lionColorDark,
    marginHorizontal: 15,
    paddingHorizontal: 11,
    paddingVertical: 7
  },
  text: {
    fontFamily: "Fredericka the Great",
    fontSize: 30,
    margin: 10,
    color: appColors.lionOrangeDark
  },
  playButton: {
    borderWidth: 5,
    borderColor: appColors.lionColorDark,
    height: height * 0.12,
    width: width * 0.4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: appColors.lionColor
  },
  playButtonOutside: {
    borderWidth: 5,
    borderColor: appColors.lionOrange,
    borderRadius: 37,
    alignSelf: "center"
  },
  newLabel:{
    position: 'absolute',
    fontFamily: "Denk One",
    fontSize: 12,
    paddingHorizontal: 4,
    paddingVertical: 1,
    color: appColors.lionOrangeDark,
    backgroundColor: '#000',
    borderColor: appColors.lionOrangeDark,
    borderWidth: 1,
    borderRadius: 5,
    zIndex: 1,
    right: 0,
  },
}));