import {createStackNavigator } from 'react-navigation'
import HomeScreen from '../views/Home/Home'
import LevelsMenuScreen from '../views/LevelsMenu/LevelsMenu'
import GameStoreScreen from '../views/gameStore/GameStore'
import LevelScreen from '../views/Level/Level'

const HomeRoute = createStackNavigator(
    {
        Home: HomeScreen,
        LevelsMenu: LevelsMenuScreen,
        Level: LevelScreen,
        GameStore: GameStoreScreen,
    },
    {headerMode: 'none'}
);

export default HomeRoute;