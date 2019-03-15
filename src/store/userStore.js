import {observable, action, computed} from 'mobx'
import * as firebase from 'firebase';
import {registerForPushNotificationsAsync,updateNotificationSettingUser} from '../App/Notifications'
import SoundService from '../App/soundService'

export class userStore {
  @observable user = {
    appId:null,
    coins:50,
    stars:0,
    userLevels: null,
    bonus: null,
    currentLocale: null,
    shopping: {
      time:0,
      stars:0,
      totalPay:0,
    },
    questionsHistory: null,
    name: '',
    avatar: null,
  }
  
  @observable sound = true

  @observable AudioPlayer = new SoundService()

  @computed get getUser(){
    return this.user
  }

  @computed get getUserLevels(){
    return this.user.userLevels
  }

  @computed  get getAllUsers(){
    return  firebase.database().ref('users/').once('value', snapshot =>  snapshot.val())
  }

  @action initializeLevel = async(levelNumber,levelTime) => {
    let newLevel = { [levelNumber]: {
      levelNumber:levelNumber,
      stars:0,
      personalRecord:levelTime
      }
    }
    this.user.userLevels = Object.assign(this.user.userLevels || {} ,newLevel)
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

  @action addToShoppingData = async(amount,price,type) => {
    let newTotalPay = this.user.shopping.totalPay + price
    this.user.shopping.totalPay = newTotalPay
    if(type=='stars')
      this.user.shopping.stars = this.user.shopping.stars + amount
    else if(type=='time')
      this.user.shopping.time = this.user.shopping.time + amount
    await firebase.database().ref('users').child(this.user.appId).child('shopping').update(this.user.shopping)
  }

  @action addQuestion = async(Q) => {
    let updateDB = false
    if(!this.user.questionsHistory){
      this.user.questionsHistory = []
      updateDB = true
    }
    if(!this.user.questionsHistory.includes(Q)){
      this.user.questionsHistory.push(Q)
      updateDB = true
    }
    if(updateDB)
      await firebase.database().ref('users').child(this.user.appId).update({questionsHistory:this.user.questionsHistory})
  }

  @action updateNewPersonalRecord = async(levelNumber,newRecordTime) =>{
    this.user.userLevels[levelNumber].personalRecord = newRecordTime
    await firebase.database().ref('users/'+this.user.appId +'/userLevels')
    .child(levelNumber)
    .update({personalRecord:newRecordTime})
  }

  @action updateLevelStars = async(levelNumber,additionStars)=>{
    this.user.userLevels[levelNumber].stars += additionStars
    let newStars = this.user.userLevels[levelNumber].stars
    await firebase.database().ref('users/'+this.user.appId +'/userLevels')
    .child(levelNumber)
    .update({stars:newStars})
    this.addStars(additionStars)
  }

  @action switchSound =()=> {
    this.sound = !this.sound
  }

  @action async checkExistUser(appId){
    let ref = firebase.database().ref('users')
    let exist = true
    await ref.orderByChild('appId')
    .equalTo(appId).once('value' , 
    async snapshot => {
      let dbRes = snapshot.val()
      if(dbRes){
        this.user = Object.assign(this.user, dbRes[appId]);
        if(dbRes[appId].userLevels)
          this.user.userLevels = Object.assign({}, dbRes[appId].userLevels);
        if(dbRes[appId].questionsHistory)
          this.user.questionsHistory = dbRes[appId].questionsHistory
      }
      else{
        exist = false
        this.user.appId= appId
        this.user.name = Math.random().toString(36).substring(2, 6)
        const adorableAvatarsAPI = 'https://api.adorable.io/avatars/'
        const avatarSize = 50;
        this.user.avatar = adorableAvatarsAPI + avatarSize + '/' + this.user.name + ".png";
        try{
          this.user.currentLocale = await Expo.DangerZone.Localization.getCurrentLocaleAsync()
          let PreferredLocales = await Expo.DangerZone.Localization.getPreferredLocalesAsync() || []
          let timeZone = await Expo.DangerZone.Localization.getCurrentTimeZoneAsync()
          PreferredLocales.push(timeZone)
          this.user.localization = PreferredLocales
        }
        catch(e){console.log(e)}
        await ref.child(appId).set(this.user)
      }
    })
    return exist 
  }

  @action setAvatarsAndName = async(userId) => {
    const name = Math.random().toString(36).substring(2, 6)
    const adorableAvatarsAPI = 'https://api.adorable.io/avatars/'
    const avatarSize = 50;
    const avatar = adorableAvatarsAPI + avatarSize + '/' + name + ".png";
    let newData = {
      name,
      avatar
    }
    await firebase.database().ref('users').child(userId).update(newData)
  }

  @action async updateNotificationsSetting(){
    let notificationSettingsUser = await registerForPushNotificationsAsync()
    await updateNotificationSettingUser(notificationSettingsUser,this.user.appId)
    this.user = Object.assign(this.user, {settings: notificationSettingsUser});
  }

  @action setBonus = async(bonusCoins) => {
    let newCoins = this.user.coins + bonusCoins
    let newData = {
      bonus: new Date(),
      coins:newCoins
    }
    this.user = Object.assign(this.user, newData);
    await firebase.database().ref('users').child(this.user.appId).update(newData)
  }


}

export default new userStore