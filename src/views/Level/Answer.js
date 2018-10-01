import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import styles from './LevelStyle';

class Answer extends Component {
    state = { 
        pick:false,
        result:false,
        iterationAnimationCard: "infinite"
    }

    pickAnswer = async() => {
        const {answer, correctAnswer, onCheckLevel} = this.props
        let result = false 
        if(correctAnswer == answer){
            result = true
        }
        this.card.flash(500);
        this.setState({
            pick:true,
            result,
            iterationAnimationCard:1
        })
        await onCheckLevel(result)
    }

    calcFontSize = (size) =>{
        if(size<=18)
            return 22;
        if(size>38)
            return 12
        if(size>30)
            return 14
        if(size>24)
            return 16
        else
            return 18
    }

    render(){
        const {answer, disabledCard, color} = this.props
        const fixAnswer = answer.replace(/\&|#|;/g, ' ')
        return ( 
            <TouchableOpacity onPress={async() => {await this.pickAnswer()}} disabled={disabledCard}>
                <Animatable.View 
                style={[styles.answerCard,{backgroundColor: color}]} animation={"pulse"} 
                easing="linear" 
                iterationCount={this.state.iterationAnimationCard}
                ref={(ref)=>{this.card = ref}}
                >
                    {!this.state.pick ?
                    <View >
                        <Text style={[styles.cardText,{fontSize:this.calcFontSize(fixAnswer.length)}]}>{fixAnswer}</Text>
                    </View>
                    :
                    this.state.result ?
                    <Image style={styles.cardImg} source={require('../../../assets/images/correct.png')}/>
                    :
                    <Image style={styles.cardImg} source={require('../../../assets/images/incorrect.png')}/>
                    }
                </Animatable.View>
            </TouchableOpacity>
        );
    }
}
 
export default Answer;