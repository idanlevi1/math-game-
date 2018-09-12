import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");
import {appColors} from '../colors'

export default styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.9,
  },
  levelsView: {
    height: height * 0.55 ,
    width: width * 0.85,
  },
  rowIcons: {
    height: height *  0.25,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between"
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
    alignItems:'center'
  },
  starsLine:{
    flexDirection: "row",
    margin:5,
    alignItems: 'center',
  },
  prefaceLevelContainer:{
    flex: 1,
    backgroundColor: appColors.splashBackgound,
  },
});