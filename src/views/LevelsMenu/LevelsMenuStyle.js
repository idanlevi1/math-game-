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
    height: height * 0.55 ,
    width: width * 0.85,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rowIcons: {
    height: height *  0.25,
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
    height: height*0.5 ,
    width: width*0.55 ,
    justifyContent:'center',
    alignItems:'center',
  },
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