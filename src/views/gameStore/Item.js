import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './GameStoreStyle';
import * as Animatable from 'react-native-animatable'
import Toast from 'react-native-simple-toast';

class Item extends Component {
    state={
        iterationAnimationCard: "infinite",
    }

    buyItem = async() =>{
        const {item, userCoins, onBuy} =  this.props
        if(userCoins>=item.price){
            this.card.rubberBand(1000);
            this.setState({iterationAnimationCard:1})
            await onBuy(item)
            Toast.show('Succeeded - ' + item.amount +' ' + item.type +' added')
        }
        else
            Toast.show('You do not have enough money')

    }

    render() {
        const {item, color} =  this.props
        return ( 
            <TouchableOpacity onPress={async() => {await this.buyItem()}}>
                <Animatable.View 
                style={[styles.item,{backgroundColor: color}]} animation={"pulse"} 
                easing="linear"
                iterationCount={this.state.iterationAnimationCard}
                ref={(ref)=>{this.card = ref}}
                >
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.itemText}>Item: {item.name}</Text>
                        <Text style={styles.itemText}>Price: {item.price} coins</Text>
                    </View>
                    <Image 
                    style={styles.itemImageQuestions} 
                    resizeMode='contain' 
                    source={{uri:item.img}}
                    />
                </Animatable.View>
            </TouchableOpacity>
            );
    }
}

 
export default Item;