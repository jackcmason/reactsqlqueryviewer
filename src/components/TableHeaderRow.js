import React from 'react'

class TableHeaderRow extends React.Component {
    render() {
        let headings = this.props.keys()
        return <tr>{headings.map(name => <td>{name}</td>)}</tr>
    }
}

export default TableHeaderRow

