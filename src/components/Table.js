import React from 'react'
import TableHeaderRow from "./TableHeaderRow";
import TableRow from "./TableRow"

class Table extends React.Component {

    state = {
        products: []
    };
    componentDidMount() {
        this.getRows('http://localhost:4000/kits')
    }

    getRows = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({products: response.data}))
            .catch(err => console.error(err))
    };

    render() {
        const { products } = this.state;
        return <table>
            {products.map(row => <TableRow row = {row}/>)}
        </table>
    }
}

export default Table

