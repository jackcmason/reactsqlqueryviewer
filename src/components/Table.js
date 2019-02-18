import React from 'react'
import TableHeaderRow from "./TableHeaderRow";
import TableRow from "./TableRow"

class Table extends React.Component {
    render() {
        return <table>
            <TableHeaderRow props = {this.props[0]}/>
            {this.props.map((row) => <TableRow props = {row}/>)}
        </table>
    }
}

export default Table

