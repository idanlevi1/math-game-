import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const AnimatableIcon = (props) => {
    return ( 
        <Animatable.View 
        animation="pulse" 
        easing="ease-out" 
        iterationCount="infinite">
            <Ionicons 
            name={props.name} 
            size={props.size ? props.size : 30} 
            color={props.color ? props.color : '#FFFFFF'}/>
        </Animatable.View>
     );
}
 
export default AnimatableIcon