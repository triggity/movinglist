import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import ReactTable from 'react-table'
import rootReducer from './reducers';
import TableContainer from './containers/table';

import "react-table/react-table.css";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;


let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <TableContainer />
  </Provider>,
  document.getElementById("root")
)