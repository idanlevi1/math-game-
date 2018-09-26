import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");

export default styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.9
  },
  textTitle:{
    flex:1,
    margin: 15,
    fontFamily: "Fredericka the Great",
    fontSize: 54,
  },
  textSubtitle:{
    flex:1,
    margin: 15,
    fontFamily: "Fredericka the Great",
    fontSize: 40,
  },
  bottomLine:{
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    margin: 10,
  },
});
