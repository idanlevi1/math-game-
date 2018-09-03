import {createStackNavigator } from 'react-navigation'
import HomeScreen from '../views/Home/Home'
import LevelsMenuScreen from '../views/LevelsMenu/LevelsMenu'
import GameStoreScreen from '../views/gameStore/GameStore'

const HomeRoute = createStackNavigator(
    {
        Home: HomeScreen,
        LevelsMenu: LevelsMenuScreen,
        GameStore: GameStoreScreen,
    },
    {headerMode: 'none'}
);

export default HomeRoute;