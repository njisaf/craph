import {createContext} from 'react'

const container = createContext({});
console.log('container', container);
const Provider = container.Provider;
const Consumer = container.Consumer;

const register = (obj) => {
  Object.assign(container, obj);
}

const getAll = () => container;

export {
  getAll,
  register,
  Provider,
  Consumer
};
