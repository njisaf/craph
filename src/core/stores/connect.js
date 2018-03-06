import React from 'react';
import {getAll} from './container';

const connect = (mapStoreToProps) => (Component) => {
  class Connect extends React.Component {
    constructor() {
      super();
      const rawStores = getAll();

      this.effectiveStoreNames = [];
      this.allStores = this.watchStores(rawStores);
      this.unsubscribes = [];

      Object.keys(rawStores).forEach(key => {
        const unsubscribe = this.allStores[key].subscribe(() => {
          if (this.needsUpdate(key)) {
            this.forceUpdate();
          }
        });
        this.unsubscribes.push(unsubscribe);
      });
    }

    needsUpdate(storeName) {
      return this.effectiveStoreNames.some(name => name === storeName);
    }

    watchStores(stores) {
      const watchedStores = {};

      Object.keys(stores).forEach(key => {
        Object.defineProperty(watchedStores, key, {
          get: () => {
            this.effectiveStoreNames.push(key);
            return stores[key];
          }
        });
      });
    }

    render() {
      return (
        <Component {...mapStoreToProps(this.allStores)} {...this.props} />
      );
    }

    componentWillUpdate() {
      this.effectiveStoreNames = [];
    }
  }
  Connect.displayName = `Connect(${Component.name || Component.displayName})`;

  return Connect;
}

export default connect;
