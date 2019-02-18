import React from 'react'

class TableHeaderRow extends React.Component {
    render() {
        let headings = this.props.keys();
        return <tr>{headings.map(name => <th>{name}</th>)}</tr>
    }
}

export default TableHeaderRow

