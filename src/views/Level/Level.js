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
    const { questionsHistory } = this.props.userStore.getUser
    console.log('questionsHistory',questionsHistory)
    
    // if first time - iniialize level
    if(!userLevelDetails){
      await this.props.userStore.initializeLevel(level.number)
      newUserLevelDetails = this.props.userStore.userLevels
    }
    else
      newUserLevelDetails = userLevelDetails
    let difficulty = 'easy'    
    if(level.number>20)
      difficulty = 'medium'
    else if(level.number>10)
      difficulty = 'hard'
    let question = await getQuestion(difficulty,level.type)
    if(question)
      while(1){
        if(!questionsHistory || !questionsHistory.includes(question.question))
          break;
      }
    else{
      console.log('ERROR',question)
    }
    this.setState({question,userLevelDetails:newUserLevelDetails})
  }

  startPlay = () =>{
    this.setState({preLevel:false})
  }
  
  playerWon = async(timeLeft,fullTime) => {
    let timeIsTake = fullTime - timeLeft
    //Record time handle
    let bonusCoins = await this.recordeTimeHandle(timeIsTake)
    //Stars handle
    await this.starsHandle(timeIsTake, fullTime)
    //COINS handle
    await this.coinsHandle(bonusCoins,timeLeft)
  }

  playerLost = () => {
    console.log('LOST')
  }

  recordeTimeHandle = async(timeIsTake) =>{
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
        bonusCoins = level.number * 10
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
    if(userLevelDetails.stars != 3){
      let winnigRatio = timeIsTake / fullTime
      if(winnigRatio <= 0.4){
        winningStars++
        if(winnigRatio <= 0.2)
          winningStars++
      }
    }
    if(winningStars > userLevelDetails.stars){
      let additionStars = winningStars - userLevelDetails.stars
      await updateLevelStars(level.number,additionStars)
    }
  }

  coinsHandle = async(bonusCoins,timeLeft) =>{
    const { level } = this.props.navigation.state.params
    const { addCoins } = this.props.userStore
    let winningCoins = (timeLeft * level.number) + bonusCoins
    await addCoins(winningCoins)
  }
 
  render() {
    const { userStore, navigation} = this.props;
    const { level, userLevelDetails } = navigation.state.params
    const { coins, stars, shopping } = userStore.getUser;

    return (
        !this.state.preLevel && this.state.question ?
        <LevelView
        level={level}
        coins={coins}
        stars={stars}
        userLevelDetails={this.state.userLevelDetails}
        sound={userStore.sound}
        shoppingTime={shopping.time}
        navigation={navigation}
        onPlayerWon={this.playerWon}
        onPlayerLost={this.playerLost}
        question={this.state.question}
        />
        :
        <PrefaceLevel
        level={level}
        bonusTime={shopping.time}
        personalRecord={this.state.userLevelDetails ? this.state.userLevelDetails.personalRecord : 999}
        startPlay={this.startPlay}
        />
    )
  }
}

export default Level;