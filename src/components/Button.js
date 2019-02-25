import React from 'react'
import './Button.css'

class Button extends React.Component {
    handleClick() {
        console.log("click!")
    }
    render() {
        return <button className="querybutton" type="button" onClick={this.handleClick.bind(this)}>{this.props.text}</button> //note the bind
    }
}

export default Button
