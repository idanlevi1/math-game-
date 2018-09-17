import {createStackNavigator } from 'react-navigation'
import HomeScreen from '../views/Home/Home'
import LevelsMenuScreen from '../views/LevelsMenu/LevelsMenu'
import GameStoreScreen from '../views/gameStore/GameStore'
import LevelScreen from '../views/Level/Level'
import PrefaceLevelScreen from '../views/LevelsMenu/PrefaceLevel'
import BonusScreen from '../views/Bonus/Bonus'

const HomeRoute = createStackNavigator(
    {
        Home: HomeScreen,
        LevelsMenu: LevelsMenuScreen,
        PrefaceLevel: PrefaceLevelScreen,
        Level: LevelScreen,
        GameStore: GameStoreScreen,
        Bonus: BonusScreen,
    },
    {headerMode: 'none'}
);

export default HomeRoute;