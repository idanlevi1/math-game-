import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
  },
  header:{
    flexDirection: "row",
    justifyContent:'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  itemsContainer:{
    height: height * 0.65,
    marginVertical: 10,
    marginBottom: 15,
    justifyContent:'space-around',
    alignItems: 'center',
    backgroundColor:'#FFD54F',
    opacity:0.8
  },
  textTitle:{
    fontFamily: "Fredericka the Great",
    fontSize: 44,
    textAlign: 'center',
  },
  textSubtitle:{
    margin: 15,
    fontFamily: "Fredericka the Great",
    fontSize: 40,
  },
  bottomLine:{
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  item: {
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:5,
    width: width * 0.7,
    height: height * 0.14,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent:'space-around',
    alignItems: 'center',
  },
  itemText:{
    fontFamily: 'Denk One',
    fontSize: 22,
    textAlign:'center',
    margin:2,
  },
  itemImageQuestions:{
    width:height * 0.09,
    height:height * 0.09,
    alignSelf: 'center',
  },
  cardTextContainer:{
    flexDirection: 'column',
  }
});
