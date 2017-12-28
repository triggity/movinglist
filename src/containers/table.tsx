import { connect } from 'react-redux'
import Table from '../components/table';
import { RootState } from '../reducers/index';
// import * as ReactTable from 'react-table';

const mapStateToProps = (state: RootState) => {
    return {
        columns: state.columns,
        data: state.items.items
    };
}


const TableContainer = connect(
  mapStateToProps
)(Table)

export default TableContainer;