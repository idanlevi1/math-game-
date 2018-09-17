import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../colors';
import * as Animatable from 'react-native-animatable'

const BackButton = (props) => {
    return ( 
        <TouchableOpacity underlayColor='#fff'
        onPress={()=>{
            props.pop2screens ? 
            props.navigation.pop(2)
            :
            props.navigation.goBack()}} >
            <Animatable.View style={styles.iconButton}>
            <Ionicons name={'md-arrow-back'} size={40} color={appColors.lionColorDark}/>
            </Animatable.View>
        </TouchableOpacity> 
    );
}
 
export default BackButton;

const styles = StyleSheet.create({
    iconButton: {
      backgroundColor: '#000',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: appColors.lionColorDark,
      marginHorizontal: 15,
      paddingHorizontal: 11,
      paddingVertical: 7,
    },
  });