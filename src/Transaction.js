import React, { Component } from 'react';
import './Transaction.css';

export class Transaction extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = document.querySelector("name=[name]".value);
        const quantity = document.querySelector("name=quantity").value;
        fetch("https://i3g96.sse.codesandbox.io/coins/new", {
            method : "POST",
            headers : {
                Accept : "application/json",
                "constentType" : "application/json"
            },
            body: JSON.stringify({name:name, quantity:quantity})
        }).then(this.props.refreshPage);
    }
    renderOptions(){
        // console.log("Yooo00000",this.props.coins);
        return Object.keys(this.props.coins).map((key) => (
            <option key={key}>{key}</option>
            
        ))
        
    }
    render() {
        return (
            <div className="transaction__form">
                <form action="https://i3g96.sse.codesandbox.io/coins/new" method="POST">
                        <label>
                                Coin:
                                <select name="coin">{this.renderOptions()}</select>
                            </label>
                            <label>
                                Quantity
                                <input type="number" name = "quantity"  placeholder = "Quantity"/>
                            </label>
                            <div className="transaction__button">
                                <button type="submit" className="trade__button buy">Buy</button>
                                <button type="submit" className="trade__button sell">Sell</button>
                            </div>
                </form>
            </div>
        )
    }
}

export default Transaction;
