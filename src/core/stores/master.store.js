
export default class MasterStore {
  constructor() {
    this.state;
    this.listeners = [];
    this.reducers = {};
  }

  getState = () => {
    return this.state;
  }

  subscribeReducer = (name, reducer) => {
    this.reducers[name] = reducer;
    return () => {
      this.reducers = Object.keys(this.reducers).reduce((object, key) => {
        if (key !== name) {
          object[key] = this.reducers[key];
        }
        return object;
      }, {});
    }
  }

  subscribeListener = (listener) => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    }
  }

  dispatch = (action) => {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener());
  }
}
