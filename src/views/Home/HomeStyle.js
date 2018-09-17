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
    borderColor: appColors.lionColorDark,
    marginHorizontal: 15,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  text: {
    fontFamily: "Fredericka the Great",
    fontSize: 30,
    margin: 10,
    color: appColors.lionOrangeDark,

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
  playButtonOutside:{
    borderWidth: 5,
    borderColor: appColors.lionOrange,
    borderRadius: 37,
  },
});
