import React, { Component } from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import styles from "./GameStoreStyle";
import HomeButton from '../buttons/HomeButton'
import Item from './Item'

const wallBackground = require('../../../assets/images/wallYellow.jpg')

class GameStoreView extends Component {
  render() {
    const { navigation, items, onBuy, userCoins } = this.props
    let colors = ['#AFCC38','#923780','#E82D6E','#408A8C','#43478A']
    return (
      <ImageBackground style={styles.backgroundContainer} source={wallBackground}>
        <View>
          <View style={styles.header}>
            <View style={{width:60}}/>
            <Text style={styles.textTitle}>Store</Text>
            <Coins coins={userCoins}/>
          </View>
          <View style={styles.itemsContainer}>
            <ScrollView>
            {Object.keys(items).map((k,i)=>
              <Item 
              item={items[k]}
              color={colors[i]}
              key={i} 
              onBuy={onBuy}
              userCoins={userCoins}
              />
              )}
            </ScrollView>
          </View>
          <View style={styles.bottomLine}>
            <HomeButton navigation={navigation}/>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default GameStoreView;