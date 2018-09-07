import React from 'react';
import {Image} from 'react-native'
import * as Animatable from 'react-native-animatable';

export default AnimatableImage = (props) => {
    return ( 
        <Animatable.View 
        animation="pulse" 
        easing="ease-out" 
        iterationCount="infinite">
            <Image 
            style={{
                width:props.width ? props.width : 45,
                height:props.height ? props.height : 45,
            }} 
            resizeMode='contain' 
            source={props.source}
            />
        </Animatable.View>
     );
}