import {action, observable} from 'mobx';

class MasterStore {


  @observable lastCreated = undefined;
  @observable autoplay = false;
  @observable startTime = 0;
  @observable volume = 0;
}

export const masterStore = new MasterStore();
