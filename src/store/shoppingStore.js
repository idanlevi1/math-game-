import {observable, action, computed, toJS} from 'mobx'
import * as firebase from 'firebase';

export class shoppingStore {
  @observable shoppingItems = {}

  @action async loadingShoppingItems(){
    await firebase.database().ref('store')
    .once('value' , snapshot => {
      this.shoppingItems = Object.assign({}, snapshot.val())})
  }
  
}

export default new shoppingStore