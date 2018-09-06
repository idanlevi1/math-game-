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

  @action async updateLevelNewRecord(levelNumber,newRecordTime){
    this.getLevels[levelNumber].record = newRecordTime
    await firebase.database().ref('levels')
    .child(levelNumber)
    .update({record:newRecordTime})
  }

  @action async updateLevelStars(levelNumber,newStars){
    this.getLevels[levelNumber].stars = newStars
    await firebase.database().ref('levels')
    .child(levelNumber)
    .update({stars:newStars})
  }
  
}

export default new levelsStore