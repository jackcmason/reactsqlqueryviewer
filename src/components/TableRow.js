import React from 'react'

class TableRow extends React.Component {
    render() {
        let columns = this.props.values();
        return <tr>{columns.map((value) => <td>{value}</td>)}</tr>
    }
}

export default TableRow
