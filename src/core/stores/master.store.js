export default class MasterStore {

  constructor() {
    this.subscribers = [];
    this.state = {};
  }

  setState(state) {
    //using Object.assign like this, later objects (state) will overwrite the matching properties of preceding objects (this.state);
    this.state = Object.assign({}, this.state, state);
    this.dispatch();
  }

  subscribe(listener) {
    this.subscribers.push(listener);
    let isSubscribed = true;

    return () => {
      if (!isSubscribed) {
        return;
      }
      isSubscribed = false;
      const index = this.subscribers.indexOf(listener);

      this.subscribers.splice(index, 1);
    };
  }

  dispatch() {
    this.subscribers.forEach(listener => listener());
  }
}
