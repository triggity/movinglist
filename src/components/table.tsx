import * as React from 'react';
import * as ReactTable from 'react-table';

const Table = (props) => (
    <ReactTable.default
        data={props.data}
        columns={props.columns}
    />
)
export default Table;