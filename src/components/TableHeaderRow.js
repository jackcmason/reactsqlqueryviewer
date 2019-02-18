import React from 'react'

class TableHeaderRow extends React.Component {
    render() {
        let headings = Object.keys(this.props.header);
        return <tr>{headings.map(name => <th>{name}</th>)}</tr>
    }
}

export default TableHeaderRow

