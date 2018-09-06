import {observable, action, computed} from 'mobx'
import * as firebase from 'firebase';

export class userStore {
  @observable user = {
    appId:null,
    coins:0,
    stars:0,
    userLevels: null,
    shopping: null
  }
  
  @observable sound = true

  @computed get getUser(){
    return this.user
  }

  @computed get getUserLevels(){
    if(this.user.userLevels){
      let userLevelsArray = [];
      this.user.userLevels.forEach(l=> {typeof l !== 'undefined' && userLevelsArray.push(l)})
      return userLevelsArray
    }
    return null
  }
  @action initializeLevel = async(levelNumber) => {
    let newLevel = { [levelNumber]: {
      levelNumber:levelNumber,
      stars:0,
      personalRecord:999
      }
    }
    await firebase.database().ref('users/'+this.user.appId +'/userLevels')
    .update(newLevel)
  }
  
  @action addStars = async(num)=> {
    let newStars = this.user.stars + num
    this.user.stars = newStars
    await firebase.database().ref('users').child(this.user.appId).update({stars:newStars})
  }

  @action addCoins = async(num) => {
    let newCoins = this.user.coins + num
    this.user.coins = newCoins
    await firebase.database().ref('users').child(this.user.appId).update({coins:newCoins})
  }

  @action async updateNewPersonalRecord(levelNumber,newRecordTime){
    this.user.userLevels[levelNumber].personalRecord = newRecordTime
    await firebase.database().ref('users/'+this.user.appId +'/userLevels')
    .child(levelNumber)
    .update({personalRecord:newRecordTime})
  }

  @action switchSound =()=> {
    this.sound = !this.sound
  }

  @action async checkExistUser(appId){
    let ref = firebase.database().ref('users')
    let exist = await ref.orderByChild('appId')
    .equalTo(appId).once('value' , 
    snapshot => {
      let dbRes = snapshot.val()
      if(dbRes){
        this.user = Object.assign(this.user, dbRes[appId]);
        return true
      }
      else{
        this.user.appId= appId
        ref.child(appId).set(this.user)
        return false
      }
    })
    return exist 
  }
}

export default new userStore