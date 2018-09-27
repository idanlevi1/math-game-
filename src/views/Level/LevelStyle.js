import { StyleSheet, Dimensions } from "react-native";
import { appColors } from "../colors";
const { width, height } = Dimensions.get("screen");

export default (styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
  },
  container:{
    //justifyContent: 'center',
  },
  titleText:{
    fontFamily: 'Fredericka the Great',
    fontSize: 28,
    marginVertical:height * 0.05,
    textAlign:'center',
    color:'#FFFFFF'
  },
  progressBar:{
    marginHorizontal:10,
    marginBottom:height * 0.08,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  progressBarText:{
    color:'#FFFFFF',
    width:32,
    fontFamily: 'Denk One',
    fontSize: 18,
    textAlign:'center',
    margin:2,
  },
  question:{
    marginHorizontal:15,
    borderWidth:1,
    borderRadius:5,
  },
  questionText:{
    fontSize: 18,
    textAlign:'center',
    fontFamily: 'Denk One',
  },
  answers:{
    height: height * 0.4,
    marginHorizontal: 10,
    marginVertical:height * 0.05,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignItems: 'center',
    alignContent:'space-around'
  },
  answerCard: {
    margin:15,
    width: width * 0.25,
    height: height * 0.15,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent:'center',
  },
  cardText:{
    fontFamily: 'Denk One',
    fontSize: 22,
    textAlign:'center',
    margin:2,
  },
  cardImg:{
    width: width * 0.18,
    height: height * 0.10,
    alignSelf: "center",
  },
  modalContainer: {
    marginTop: height * 0.1,
    alignSelf: "center",
    alignItems: "center",
    width: width * 0.85,
    height: height * 0.6,
    opacity: 0.97,
    overflow: 'hidden',
  },
  modalIn:{
    marginTop:  height * 0.07,
  },
  titleModal: {
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Fredericka the Great",
    marginBottom: height * 0.05,
    color:'#492E10',
  },
  subtitleModal: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: 'Denk One',
    color:'#492E10',
    marginBottom: 5,
  },
  buttonModal: {
    borderWidth: 2,
    borderColor: "#492E10",
    height: 50,
    width: 100,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: '#D47A22',
    marginTop:8
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
  playButtonText: {
    fontFamily: "Fredericka the Great",
    fontSize: 30,
    margin: 10,
    color: appColors.lionOrangeDark,
  },
  playButton: {
    borderWidth: 5,
    borderColor: appColors.lionColorDark,
    height: height * 0.1,
    width: width * 0.3,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: appColors.lionColor
  },
  playButtonOutside:{
    marginTop:15,
    borderWidth: 5,
    borderColor: appColors.lionOrange,
    borderRadius: 37,
    alignSelf: "center",
  },
}));
