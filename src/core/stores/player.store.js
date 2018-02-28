import {action, observable} from 'mobx';

class PlayerStore {

  @action setInitialState(options) {
    for (let key in options) {
      if (this[key]) {
        this[key] = options[key];
      }
    }
  }


  @observable lastCreated = undefined;

  //player state
  @observable autoplay = false;
  @observable loop = false
  @observable startTime = 0;
  @observable volume = 7;
}

export const playerStore = new PlayerStore();
