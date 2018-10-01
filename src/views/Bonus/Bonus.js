import React, { Component } from 'react';
import { Text,ImageBackground, View, TouchableOpacity,Image } from 'react-native';
import styles from './BonusStyle';
import _ from 'lodash';
import * as Animatable from 'react-native-animatable'

class Card extends Component {
    state = { 
        color:null,
        coins:null,
        pick:false,
        iterationAnimationCard: "infinite"
     }
    
    pickCard = async(coins) => {
        this.props.handleDisabledCards()
        this.card.bounceInDown(1500);
        this.setState({pick:coins,iterationAnimationCard:1})
        await this.props.setBonus(coins)
    }

    render() {
        const {color, coins, index, disabledCard} = this.props
        return ( 
            <TouchableOpacity onPress={async() => {await this.pickCard(coins)}} disabled={disabledCard}>
                <Animatable.View 
                style={[styles.card,{backgroundColor: color}]} animation={"pulse"} 
                easing="linear" 
                iterationCount={this.state.iterationAnimationCard}
                ref={(ref)=>{this.card = ref}}
                >
                    {this.state.pick===false ?
                    <View >
                        <Text style={styles.cardText}>{index+1}</Text>
                        <Image 
                        style={styles.cardImageQuestions} 
                        resizeMode='contain' 
                        source={require('../../../assets/images/questionsSign.png')}
                        />
                    </View>
                    :
                    <View>
                        <Text style={styles.cardWonText}>You won {this.state.pick} coins</Text>
                        <Image 
                        style={styles.cardImageLion} 
                        resizeMode='contain' 
                        source={require('../../../assets/images/lionIcon180-180.png')}
                        />
                    </View>
                    }
                </Animatable.View>
            </TouchableOpacity>
         );
    }
}
 
class Bonus extends Component {
    state = {
        play:false,
        finish:false,
        dots:''
    }

    componentDidMount() {
        let colors = ['#AFCC38','#923780','#E82D6E','#FECD34','#408A8C','#43478A']
        let coinsBonus = [0,1,5,30,50,100]
        let shuffleColors = _.shuffle(colors)
        let shuffleCoins = _.shuffle(coinsBonus)
        this.setState({shuffleColors,shuffleCoins})
    }
    
    handleDisabledCards = () => {
        this.setState({play:true})
        setTimeout(() => {this.setState({finish:true})}, 1700)
        setTimeout(() => {this.setState({dots:'.'})}, 2500)
        setTimeout(() => {this.setState({dots:'..'})}, 3000)
        setTimeout(() => {this.setState({dots:'...'})}, 3500)
        setTimeout(() => {this.props.navigation.state.params.navigation.pop(1)}, 4200)
    }

    render() {
        return ( 
            <ImageBackground resizeMode={"stretch"} 
            style={styles.backgroundContainer} 
            source={require('../../../assets/images/wallRed.jpg')}
            >
                {this.state.finish ?
                <Text style={[styles.titleText,{color:'#FFF',fontSize:24}]}>Moving to the home screen{this.state.dots}</Text>
                :
                <Text style={styles.titleText}>Pick a card...</Text>
                }
                <View style={styles.cardsContainer}>
                    {this.state.shuffleColors && 
                        this.state.shuffleColors.map((c,i)=> 
                        <Card 
                        color={this.state.shuffleColors[i]}
                        coins={this.state.shuffleCoins[i]}
                        key={i} 
                        index={i}
                        disabledCard={this.state.play}
                        handleDisabledCards={this.handleDisabledCards}
                        setBonus={this.props.navigation.state.params.setBonus}
                        />
                    )}
                </View>
            </ImageBackground>
         );
    }
}
 
export default Bonus;