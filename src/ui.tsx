import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import ReactTable from 'react-table'
import rootReducer from './reducers';
import TableContainer from './containers/table';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { fetchItems } from './actions/items';

import "react-table/react-table.css";

export interface HelloProps { compiler: string; framework: string; }

// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
const loggerMiddleware = createLogger();


let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

store
  .dispatch(fetchItems())
  .then(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <TableContainer />
  </Provider>,
  document.getElementById("root")
)