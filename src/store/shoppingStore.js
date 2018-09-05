import {observable, action, computed, toJS} from 'mobx'
import * as firebase from 'firebase';

export class shoppingStore {
  @observable shoppingItems = {}

  @computed get getShopping(){
    return JSON.parse(JSON.stringify(this.shoppingItems))
  }

  @action async loadingShoppingItems(){
    await firebase.database().ref('store')
    .once('value' , snapshot => {this.shoppingItems = snapshot})
  }
  
}

export default new shoppingStore