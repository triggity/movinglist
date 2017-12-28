// import * as ReactDOM from 'react-dom';
import * as React from 'react';

const defaultColumns = [{
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
const columns = (state = defaultColumns, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default columns;