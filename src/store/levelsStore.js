import {observable, action, computed, toJS} from 'mobx'
import * as firebase from 'firebase';

export class levelsStore {
  @observable levels = {}

  @computed get getLevels(){
    return JSON.parse(JSON.stringify(this.levels))
  }

  @action async loadingLevels(){
    await firebase.database().ref('levels')
    .once('value' , snapshot => {this.levels = snapshot})
  }
  
}

export default new levelsStore