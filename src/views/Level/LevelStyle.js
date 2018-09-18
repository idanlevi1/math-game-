import { StyleSheet } from "react-native";
import { appColors } from "../colors";

export default (styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.9,
  },
  modalContainer: {
    marginTop: "45%",
    alignSelf: "center",
    alignItems: "center",
    height: "35%",
    width: '80%',
    borderRadius: 15,
    opacity: 0.9,
    overflow: 'hidden',
    borderStyle: 'solid',
  },
  titleModal: {
    fontSize: 22,
    textAlign: "center",
    color: "#FFFFFF",
    paddingTop: 10,
    fontFamily: "Indie Flower",
  },
  subtitleModal: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFFFFF",
    paddingVertical: 15,
    fontFamily: "Indie Flower",
  },
  buttonModal: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: appColors.lionColorDark,
    paddingVertical: 10,
  },
  progressBar:{
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bottomLine:{
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  prefaceLevelContainer:{
    flex: 1,
    width:null,
  },
  viewContanerPreface:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  prefaceTextTitle:{
    fontFamily: 'Fredericka the Great',
    fontSize: 48,
    marginBottom:10,
  },
  prefaceText:{
    fontFamily: 'Denk One',
    fontSize: 26,
    marginTop:10,
  },
}));
