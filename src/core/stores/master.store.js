import {playerStore} from './player.store';


class MasterStore {

  constructor() {
    this.playerStore = playerStore;
  }
}

export const masterStore = new MasterStore();
