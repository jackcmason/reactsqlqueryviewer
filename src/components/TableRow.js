import React from 'react'

class TableRow extends React.Component {
    render() {
        let columns = Object.values(this.props.row);
        return <tr>{columns.map((value) => <td>{value}</td>)}</tr>
    }
}

export default TableRow
