import React, { Component } from 'react';
import './Transaction.css';

const initialState = {
    coin : "",
    quantity : null,
    quantityError : null
};

export class Transaction extends Component {
     state = initialState;

     handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };

    validate = () => {
        let quantityError = "";
        if(this.state.quantity === "0"){
            quantityError = "Zero is not a valid quantity to trade"     
        }
        if(quantityError){
            this.setState({ quantityError});
            return false;
        }
        return true;
    }
    
    handleSubmit = (e, transactionType = 'buy') => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        //  console.log(this.state);  

        const name = document.querySelector("[name=coin]").value;
        const quantity = Number.parseInt(document.querySelector("[name=quantity]").value);
        alert(`${name} ${quantity}`);

        fetch("https://i3g96.sse.codesandbox.io/coins/new", {
            method : "POST",
            mode: "cors",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json",
                
            },
            body: JSON.stringify({name:name, quantity:quantity})
        }).then(data => data.json()).then(this.props.refreshPage())
        this.setState(initialState);

     }
 }

    renderOptions(){
        return Object.keys(this.props.coins).map((key) => (
            <option key={key}>{key}</option>
            
        ))
        }
     
    render() {
        return (
            <div className="transaction__form">
                <form 
                    action="https://i3g96.sse.codesandbox.io/coins/new" 
                    method="POST"
                    onSubmit={event=>this.handleSubmit(event)}
                    >
                    <table className="transaction__input">
                        <label>
                            Coin:
                            <select name="coin"  value={this.state.coin} onChange={this.handleChange}>{this.renderOptions()}</select>
                        </label>
                        <label>
                            Quantity:
                          <input type="number"  name = "quantity" value={this.state.quantity} onChange={this.handleChange} placeholder = "Quantity" required="required" />
                        </label>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.quantityError}
                        </div>
                    </table>
                    <div className="transaction__button">
                        <button type="submit" className="trade__button buy">Buy</button>
                        <button type="submit" className="trade__button sell" >Sell</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Transaction;
