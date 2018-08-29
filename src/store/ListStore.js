import {observable} from 'mobx'
import * as firebase from 'firebase';

class ObservableStore {
  @observable user = {
    appId:null,
    coins:0,
    stars:0,
  }
  @observable sound = true

  addStars(num) {
      this.user.stars = this.user.stars + num
  }

  addCoins(num) {
    this.user.coins = this.user.coins + num
  }

  switchSound() {
    this.sound = !this.sound
  }

  async checkExistUser(appId){
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

const store = new ObservableStore()
export default store