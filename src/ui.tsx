import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactTable from 'react-table'
import "react-table/react-table.css";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
const data = [{
  name: 'Tanner Linsley',
  age: 26,
  friend: {
    name: 'Jason Maurer',
    age: 23,
  }
}
]

const columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!
}, {
  Header: 'Age',
  accessor: 'age',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'friendName', // Required because our accessor is not a string
  Header: 'Friend Name',
  accessor: d => d.friend.name // Custom value accessors!
}, {
  Header: () => <span>Friend Age</span>, // Custom header components!
  accessor: 'friend.age'
}]


ReactDOM.render(
  <ReactTable
  data={data}
  columns={columns}
/>,
  document.getElementById("example")
)