import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");
import {appColors} from '../colors'

export default styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    opacity:0.9,
  },
  levelsView: {
    marginTop:15,
    height: height * 0.65,
    width: width * 0.85,
    alignSelf: 'center',
  },
  levelsLine:{
    height: height * 0.4,
    width: width * 0.4,
  },
  rowIcons: {
    height: height *  0.15,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  bottomLine:{
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  levelContainer:{
    marginTop: height*0.04,
    marginLeft: height*0.04,
    borderRadius: 100,
    height: height*0.22,
    width: height*0.22,
    justifyContent:'center',
    alignItems:'center',
  },
  imgBGCard:{width:height*0.3,height:height*0.3},
  starsLine:{
    flexDirection: "row",
  },
  cardTextTitle:{
    fontFamily: "Fredericka the Great",
    fontSize: 32,
  },
  cardText:{
    fontFamily: "Fredericka the Great",
    fontSize: 26,
    textAlign:'center',
    marginBottom: 5,
  },
});