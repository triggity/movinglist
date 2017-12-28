import * as React from 'react';
import * as ReactTable from 'react-table';

const Table = (props) => (
    <ReactTable.default
        data={props.data}
        filterable={true}
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]).toLowerCase().includes(filter.value)}
        columns={props.columns}
        defaultPageSize={100}
        className="-striped -highlight"
    />
)
export default Table;