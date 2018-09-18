import React from 'react';
import {Image} from 'react-native'
import * as Animatable from 'react-native-animatable';

export default AnimatableImage = (props) => {
    return ( 
        <Animatable.View 
        animation="pulse" 
        easing="ease-in-sine" 
        iterationCount="infinite">
            <Image 
            style={{
                width:props.size ? props.size : 60,
                height:props.size ? props.size : 60,
            }} 
            resizeMode='contain' 
            source={props.source}
            />
        </Animatable.View>
     );
}