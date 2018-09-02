import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.8,
  },
  levelsView: {
    height: height * 0.7 ,
    width: width * 0.85,
  },
  rowIcons: {
    height: height *  0.3,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  levelContainer:{
    backgroundColor:'#fff',
    height: height*0.5 ,
    width: width*0.55 ,
    borderWidth: 3,
    margin:5,
    opacity:0.9
  }
});
