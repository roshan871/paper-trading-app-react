import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
            <form>
                <label>
                    Coin:
                    <select name="coin">{this.renderOptions}</select>
                </label>
                <label>
                    Quantity
                    <input type="text" name = "quantity"  placeholder = "Quantity"/>
                    <button data-action = "buy">Buy</button>
                    <button data-action = "sell">Sell</button>
                </label>
            </form>
                
            </div>
        )
    }
}

export default Form
