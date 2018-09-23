import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Modal, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");
import BackButton from '../buttons/BackButton'
import styles from './LevelStyle'
import {appColors,questionColors} from '../colors'
import * as Progress from 'react-native-progress';
import AnimatableImage from '../components/AnimatableImage'
import Answer from './Answer'
import _ from 'lodash';

class LevelView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 1,
      fullTime: 1,
      intervalId: null,
      finish: false,
      answers: null,
      question:null,
      correctAnswer:null,
    };
  }

  componentDidMount() {
    const {question} = this.props
    let timeLeft = this.props.level.time + this.props.shoppingTime - 1 ;
    var intervalId = setInterval(this.timer, 1000);
    let answers = question.incorrect_answers
    answers.push(question.correct_answer);
    let shuffleAnswers = _.shuffle(answers)
    this.setState({ 
      timeLeft, 
      intervalId, 
      fullTime: timeLeft,
      answers:shuffleAnswers,
      correctAnswer:question.correct_answer,
      result:false,
     });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    let timeLeft = this.state.timeLeft - 1;
    if(timeLeft >= 0) 
        this.setState({ timeLeft });
    else {
      clearInterval(this.state.intervalId);
      this.setState({ finish: true });
      this.props.onPlayerLost()
    }
  };

  closeModal = () => {
    this.setState({finish:false})
    this.props.navigation.goBack();
  }

  handleCheckLevel = async(result) => {
    clearInterval(this.state.intervalId);
    await setTimeout(() => {
      if(result){
        this.props.onPlayerWon(this.state.timeLeft, this.state.fullTime)
      }
      else{
        this.props.onPlayerLost()
      }
      this.setState({finish:true,result})
      , 1000})
  }

  render() {
    const { level, question, stars, userLevelDetails, sound, onPlayerWon, onPlayerLost, onCheckLevel, navigation } = this.props;
    const colors = Object.values(questionColors)
    const color = colors[level.number%colors.length]
    return (
      <ImageBackground
      style={styles.backgroundContainer}
      source={require('../../../assets/images/wallTorkiz.jpg')}
      >
        <View style={styles.container}>
          <Text style={styles.titleText}>Level {level.number} - {level.name}</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <AnimatableImage source={require('../../../assets/images/timer.png')} size={35}/>
              <Progress.Bar
              progress={this.state.timeLeft / this.state.fullTime}
              width={width*0.6}
              height={35}
              color={appColors.lionOrange}
              unfilledColor={appColors.lionColor}
              />
            <Text style={styles.progressBarText}>{this.state.timeLeft}</Text>
            </View>
          </View>
          <View style={[styles.question,{backgroundColor:color}]}>
            <Text style={styles.questionText}>{question.question.replace(/\&|#|;/g, ' ')}</Text>
          </View>
          <View style={styles.answers}>
          { this.state.answers && 
            this.state.answers.map((a,i)=>
              <Answer
              answer={this.state.answers[i]}
              key={i}
              index={i}
              disabledCard={this.state.finish}
              onCheckLevel={this.handleCheckLevel}
              levelNumber={level.number}
              color={color}
              correctAnswer={this.state.correctAnswer}
              />)
          }
          </View>
          <View style={styles.bottomLine}>
            <BackButton navigation={navigation}/>
          </View>
        </View>

        {this.state.finish &&
          <Modal
            visible={this.state.finish}
            animationType={'slide'}
            transparent
            onRequestClose={this.closeModal}
            >
              <ImageBackground resizeMode='contain' style={styles.modalContainer} source={require('../../../assets/images/borderResult.png')}>
                <View style={styles.modalIn}> 
                  {this.state.result ? 
                    <View>
                      <Text style={styles.titleModal}>Won!</Text>
                      <Text style={styles.subtitleModal}>Time: {this.state.fullTime - this.state.timeLeft}</Text>
                    </View>
                  : 
                    <View>
                      <Text style={styles.titleModal}>{'Lost!'} </Text>
                      <Text style={styles.subtitleModal}>{'Try again'}</Text> 
                    </View>
                  }
                  <TouchableOpacity
                  rounded
                  style={styles.buttonModal}
                  onPress={() => { this.closeModal() }}
                  >
                      <Text style={styles.subtitleModal}>Close</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
          </Modal>
          }
      </ImageBackground>
    );
  }
}

export default LevelView;
