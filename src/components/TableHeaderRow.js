import React from 'react'

class TableHeaderRow extends React.Component {
    render() {
        let headings = this.props.keys();
        return <th>{headings.map(name => <td>{name}</td>)}</th>
    }
}

export default TableHeaderRow

