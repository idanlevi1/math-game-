import {createStackNavigator } from 'react-navigation'
import Home from '../views/Home/Home'
import LevelsMenu from '../views/LevelsMenu/LevelsMenu'

const HomeRoute = createStackNavigator(
    {
        Home:{screen: Home},
        headerMode: 'none',
    },
    {
        LevelsMenu:{screen: LevelsMenu},
        headerMode: 'none',
    },
);

export default HomeRoute;