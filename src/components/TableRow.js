import React from 'react'

class TableRow extends React.Component {
    render() {
        console.log(this.props);
        let columns = Object.values(this.props.row);
        return <tr>{columns.map((value) => <td>{value}</td>)}</tr>
    }
}

export default TableRow
