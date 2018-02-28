import {playerStore} from './player.store';


class MasterStore {

  constructor(props) {
    super(props);
    this.playerStore = playerStore;
  }
}

export const masterStore = new MasterStore();
