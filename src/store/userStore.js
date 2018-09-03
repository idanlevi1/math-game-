import {observable, action, computed} from 'mobx'
import * as firebase from 'firebase';

export class userStore {
  @observable user = {
    appId:null,
    coins:0,
    stars:0,
    userLevels: null,
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
  
  @action addStars =(num)=> {
      this.user.stars = this.user.stars + num
  }

  @action addCoins = (num) => {
    this.user.coins = this.user.coins + num
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