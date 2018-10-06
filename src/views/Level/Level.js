import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { getQuestion } from "./LevelService";
import LevelView from "./LevelView";
import PrefaceLevel from "./PrefaceLevel";

@inject('userStore')
@inject('levelsStore')
@observer
class Level extends Component {
  state = {
    preLevel:true,
    question:null,
    userLevelDetails:null,
  }

  async componentDidMount() {
    const { level, userLevelDetails } = this.props.navigation.state.params
    const {userStore} = this.props
    const { questionsHistory } = userStore.getUser
    // if first time - iniialize level
    if(!userLevelDetails){
      await userStore.initializeLevel(level.number,level.time)
      newUserLevelDetails = userStore.getUserLevels[level.number]
    }
    else
      newUserLevelDetails = userLevelDetails
    let difficulty = 'easy'    
    if(level.number>20)
      difficulty = 'medium'
    else if(level.number>10)
      difficulty = 'hard'
    let question = await getQuestion(difficulty,level.type)
    if(question){
      let counter = 0
      while(counter<10){
        if(!questionsHistory || !questionsHistory.includes(question.question))
          break;
        else
          question = await getQuestion(difficulty,level.type)
        counter++
      }
    }
    else
      console.log('ERROR',question)
    this.setState({question,userLevelDetails:newUserLevelDetails})
  }

  startPlay = async() =>{
    const { sound, AudioPlayer } = this.props.userStore
    await AudioPlayer.clickAudioPlay(sound)
    let price = this.props.navigation.state.params.level.price
    setTimeout(() => {
      this.props.userStore.addCoins(-price)
      this.setState({preLevel:false})
    },1);
  }
  
  playerWon = async(timeLeft,fullTime) => {
    //play sound
    const { sound, AudioPlayer } = this.props.userStore
    sound && await AudioPlayer.successAudioPlay()

    let timeIsTake = fullTime - timeLeft
    //Record time handle
    let bonusCoins = await this.recordTimeHandle(timeIsTake)
    //Stars handle
    let winningStars = await this.starsHandle(timeIsTake, fullTime)
    sound && setTimeout(async() => { await AudioPlayer.starsAudioPlay(winningStars)},1000);
    
    //COINS handle
    let winningCoins = await this.coinsHandle(bonusCoins,timeLeft)
    //Question handle
    await this.props.userStore.addQuestion(this.state.question.question)

    let newRecord = false
    if(bonusCoins>0){
      newRecord = true
      winningCoins-=bonusCoins
    }
    let gameDetails = {
      timeIsTake: timeIsTake,
      winningStars: winningStars,
      winningCoins: winningCoins,
      newRecord: newRecord
    }
    return gameDetails
  }

  playerLost = async() => {
    const { sound, AudioPlayer } = this.props.userStore
    sound && await AudioPlayer.failAudioPlay()
  }

  recordTimeHandle = async(timeIsTake) =>{
    const { navigation, userStore, levelsStore} = this.props
    const { level } = navigation.state.params
    const { updateNewPersonalRecord } = userStore
    const { updateLevelNewRecord } = levelsStore
    const {userLevelDetails} = this.state
    let personalRecord = userLevelDetails.personalRecord
    let bonusCoins = 0
    if(timeIsTake < personalRecord ){
      await updateNewPersonalRecord(level.number,timeIsTake)
      if(timeIsTake < level.record ){
        await updateLevelNewRecord(level.number,timeIsTake)
        bonusCoins = level.number * 2
      }
    }
    return bonusCoins
  }

  starsHandle = async(timeIsTake, fullTime) =>{
    const { navigation, userStore} = this.props
    const { level } = navigation.state.params
    const { updateLevelStars } = userStore
    const {userLevelDetails} = this.state
    let winningStars = 1 
    let winnigRatio = timeIsTake / fullTime
    if(winnigRatio <= 0.5){
      winningStars++
      if(winnigRatio <= 0.25)
        winningStars++
    }
    if(winningStars > userLevelDetails.stars){
      let additionStars = winningStars - userLevelDetails.stars
      await updateLevelStars(level.number,additionStars)
    }
    return winningStars
  }

  coinsHandle = async(bonusCoins,timeLeft) =>{
    const { level } = this.props.navigation.state.params
    const { addCoins } = this.props.userStore
    let winningCoins = (Math.ceil(timeLeft*0.7) * level.number) + bonusCoins
    await addCoins(winningCoins)
    return winningCoins
  }
 
  timerLeft4SecondSound = async() => {
    const { sound, AudioPlayer } = this.props.userStore
    sound && await AudioPlayer.timerAudioPlay()
  }

  handleStopTimerSound = async()=>{
    const { sound, AudioPlayer } = this.props.userStore
    sound && await AudioPlayer.stopTimerAudioPlay()
  }
  render() {
    const { userStore, navigation} = this.props;
    const { level } = navigation.state.params
    const { shopping } = userStore.getUser;

    return (
        !this.state.preLevel && this.state.question ?
        <LevelView
        level={level}
        shoppingTime={shopping.time}
        navigation={navigation}
        onPlayerWon={this.playerWon}
        onPlayerLost={this.playerLost}
        question={this.state.question}
        timerLeft4SecondSound={this.timerLeft4SecondSound}
        stopTimerSound={this.handleStopTimerSound}
        />
        :
        <PrefaceLevel
        level={level}
        bonusTime={shopping.time}
        personalRecord={this.state.userLevelDetails ? this.state.userLevelDetails.personalRecord : 1000}
        startPlay={this.startPlay}
        />
    )
  }
}

export default Level;