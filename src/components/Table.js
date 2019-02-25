import React from 'react'
import TableHeaderRow from "./TableHeaderRow";
import TableRow from "./TableRow"
import Button from "./Button";

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
        return <div>
            <button onClick={(e) => this.getRows('http://localhost:4000/locations', e)}>Get Locations</button>
            <button onClick={(e) => this.getRows('http://localhost:4000/kits', e)}>Get Kits</button>
            <button onClick={(e) => this.getRows('http://localhost:4000/kitlocations', e)}>Get Kit Locations</button>
            <table>
                {products.map(row => <TableRow row = {row}/>)}
            </table>
        </div>
    }
}

export default Table

