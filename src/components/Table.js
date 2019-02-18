import React from 'react'
import TableHeaderRow from "./TableHeaderRow";
import TableRow from "./TableRow"

class Table extends React.Component {
    render() {
        return <table>
            <TableHeaderRow header = {this.props.rows[0]}/>
            {this.props.rows.map((row) => <TableRow row = {row}/>)}
        </table>
    }
}

export default Table

