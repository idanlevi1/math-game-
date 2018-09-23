import {observable, action, computed, toJS} from 'mobx'
import * as firebase from 'firebase';

export class levelsStore {
  @observable levels = {}

  @computed get getLevels(){
    return this.levels
  }

  @action async loadingLevels(){
    await firebase.database().ref('levels')
    .once('value' , snapshot => this.levels = Object.assign(this.levels, snapshot.val()))
  }

  @action updateLevelNewRecord= async(levelNumber,newRecordTime)=>{
    this.levels[levelNumber].record = newRecordTime
    await firebase.database().ref('levels')
    .child(levelNumber)
    .update({record:newRecordTime})
  }
  
}

export default new levelsStore