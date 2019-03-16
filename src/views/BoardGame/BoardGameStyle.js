import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../colors";
const { width, height } = Dimensions.get("screen");

export default (styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    backgroundColor: appColors.mainColor
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  profileDetailsContainer: {
    marginRight: width * 0.05,
    width: width * 0.2
  },
  title: {
    textAlign: "center",
    fontFamily: "Fredericka the Great",
    fontSize: 28,
    marginVertical: 10,
    color: appColors.lionColorDark
  },
  tableHeader: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Fredericka the Great",
    fontSize: 16,
    color: appColors.lionColorDark,
    flex: 1
  },
  userItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
    paddingVertical: 5,
    backgroundColor: appColors.mainColor,
    opacity: 0.9
  },
  currentUser: {
    backgroundColor: appColors.lionOrangeDark,
    borderColor: appColors.mainColor,
    borderWidth: 2,
    paddingVertical: 7
  },
  userItemText: {
    textAlign: "center",
    fontFamily: "Denk One",
    fontSize: 16,
    color: appColors.lionColor,
    flex: 1
  },
  userDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 1,
    marginRight: 2
  },
  backgroundAvatar: {
    backgroundColor: "#ddd",
    borderColor: appColors.lionColor
  },
  bottomLine: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 10
  },
  spinner: {
    flex: 1,
    justifyContent: "center"
  }
}));
