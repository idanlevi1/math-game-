import {createStackNavigator } from 'react-navigation'
import Home from '../views/Home/Home'
import LevelsMenu from '../views/LevelsMenu/LevelsMenu'
import GameStore from '../views/gameStore/GameStore'

const HomeRoute = createStackNavigator(
    {
        Home: {screen: Home},
        headerMode: 'none',
    },
    {
        LevelsMenu: {screen: LevelsMenu},
        headerMode: 'none',
    },
    {
        GameStore: {screen: GameStore},
        headerMode: 'none',
        routeName: 'GameStore'
    },
);

export default HomeRoute;