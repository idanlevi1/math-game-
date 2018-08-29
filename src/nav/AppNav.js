import {createStackNavigator } from 'react-navigation'

import Home from '../views/Home/Home'

const HomeRoute = createStackNavigator(
    {
        Home:{screen: Home},
    },
    {
        headerMode: 'none',
        navigationOptions: {headerVisible: false}
    }
);

export default HomeRoute;