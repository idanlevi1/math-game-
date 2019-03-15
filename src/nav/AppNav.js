import { createStackNavigator } from "react-navigation";
import HomeScreen from "../views/Home/Home";
import LevelsMenuScreen from "../views/LevelsMenu/LevelsMenu";
import GameStoreScreen from "../views/gameStore/GameStore";
import LevelScreen from "../views/Level/Level";
import PrefaceLevelScreen from "../views/Level/PrefaceLevel";
import BonusScreen from "../views/Bonus/Bonus";
import BoardGameScreen from "../views/BoardGame/BoardGame";

const HomeRoute = createStackNavigator(
  {
    Home: HomeScreen,
    LevelsMenu: LevelsMenuScreen,
    PrefaceLevel: PrefaceLevelScreen,
    Level: LevelScreen,
    GameStore: { screen: GameStoreScreen },
    Bonus: BonusScreen,
    BoardGame: BoardGameScreen
  },
  { headerMode: "none" }
);

export default HomeRoute;
