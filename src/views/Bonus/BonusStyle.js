import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default (styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
  },
  cardsContainer:{
    height: height * 0.8,
    marginHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignItems: 'center',
    alignContent:'space-around'
  },
  card: {
    margin:5,
    width: width * 0.30,
    height: height * 0.20,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent:'center',
  },
  titleText:{
    fontFamily: 'Fredericka the Great',
    fontSize: 36,
    marginTop:20,
    textAlign:'center',
    height: height * 0.1
  },
  cardText:{
    fontFamily: 'Denk One',
    fontSize: 22,
    textAlign:'center',
    margin:2,
  },
  cardWonText:{
    fontFamily: 'Merienda',
    fontSize: 18,
    textAlign:'center',
    flexWrap:'wrap',
    margin:2,
  },
  cardImageQuestions:{
    width:70,
    height:70,
    alignSelf: 'center',
  },
  cardImageLion:{
    width:50,
    height:50,
    alignSelf: 'center',
  },
}));
