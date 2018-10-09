import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    opacity:0.9,
  },
  levelsView: {
    marginTop:10,
    height: height * 0.57,
    width: width * 0.9,
    alignSelf: 'center',
  },
  levelsLine:{
    height: height * 0.35,
    width: width * 0.35,
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
    marginTop: 10,
    marginBottom: 5,
  },
  levelContainer:{
    marginTop: height*0.04,
    marginLeft: height*0.04,
    borderRadius: 100,
    borderWidth:1,
    height: height*0.22,
    width: height*0.22,
    justifyContent:'center',
    alignItems:'center',
  },
  imgBGCard:{
    width:height*0.3,
    height:height*0.3,
  },
  starsLine:{
    flexDirection: "row",
  },
  cardTextTitle:{
    fontFamily: "Fredericka the Great",
    fontSize: 34,
  },
  cardText:{
    fontFamily: "Fredericka the Great",
    fontSize: 18,
    textAlign:'center',
    marginBottom: 10,
  },
  priceCrad:{
    opacity:0.9,
    position:'absolute',
    zIndex:99,
    left:height*0.22-(47),
    top:height*0.22-(47),
    width:45,
    height:45,
    justifyContent:'center',
    alignItems:'center',
    margin:1,
    borderWidth:1,
    borderRadius:24,
    borderColor: 'gray',
    backgroundColor:'#000000',
  },
  priceText:{
    fontFamily: "Merienda",
    fontSize: 11,
    textAlign:'center',
  },
});