import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LevelView from "./LevelView";
import PrefaceLevel from "./PrefaceLevel";

@inject('userStore')
@inject('levelsStore')
@observer
class Level extends Component {
  state = {preLevel:true}

  async componentDidMount() {
    const { level, userLevelDetails } = this.props.navigation.state.params
    // if first time - iniialize level
    if(!userLevelDetails)
      await this.props.userStore.initializeLevel(level.number)

    setTimeout(() => {this.setState({preLevel:false})}, 4000)
  }

  checkLevel = () =>{

  }
  
  playerWon = async(timeLeft,fullTime) => {
    let totalLevelTime = fullTime - timeLeft
    //Record time handle
    let bonusCoins = await this.recordeTimeHandle(totalLevelTime)
    //Stars handle
    await this.starsHandle(totalLevelTime, fullTime)
    //COINS handle
    await this.coinsHandle(bonusCoins,timeLeft)
  }

  playerLost = () => {
    console.log('LOST')
  }

  recordeTimeHandle = async() =>{
    const { navigation, userStore, levelsStore} = this.props
    const { level, userLevelDetails } = navigation.state.params
    const { updateNewPersonalRecord } = userStore
    const { updateLevelNewRecord } = levelsStore

    let personalRecord = userLevelDetails.personalRecord
    let bonusCoins = 0
    if(totalLevelTime < personalRecord ){
      await updateNewPersonalRecord(level.number,totalLevelTime)
      if(totalLevelTime < level.record ){
        await updateLevelNewRecord(level.number,totalLevelTime)
        bonusCoins = level.number * 10
      }
    }
    return bonusCoins
  }

 starsHandle = async(totalLevelTime, fullTime) =>{
  const { navigation, userStore, levelsStore} = this.props
  const { level, userLevelDetails } = navigation.state.params
  const { addStars } = userStore
  const { updateLevelStars } = levelsStore

  let winningStars = 1 
  if(userLevelDetails.stars != 3){
    let winnigRatio = totalLevelTime / fullTime
    if(winnigRatio <= 0.4){
      winningStars++
      if(winnigRatio <= 0.2)
        winningStars++
    }
  }
  if(winningStars > userLevelDetails.stars){
    await updateLevelStars(level.number,winningStars)
    await addStars(winningStars)
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
        !this.state.preLevel ?
        <LevelView
        level={level}
        coins={coins}
        stars={stars}
        userLevelDetails={userLevelDetails}
        sound={userStore.sound}
        shoppingTime={shopping.time}
        navigation={navigation}
        onPlayerWon={this.playerWon}
        onPlayerLost={this.playerLost}
        onCheckLevel={this.checkLevel}
        />
        :
        <PrefaceLevel
        level={level}
        bonusTime={shopping.time}
        personalRecord={userLevelDetails.personalRecord}
        />
    )
  }
}

export default Level;