import React, { Component } from 'react';
import './Transaction.css';



export class Transaction extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        const name = document.querySelector("[name=coin]").value;
        const quantity = Number.parseInt(document.querySelector("[name=quantity]").value);
        // if (Number.isNaN(quantity)) {
        //     quantity = 0;
        // }
        alert(`${name} ${quantity}`);

        fetch("https://i3g96.sse.codesandbox.io/coins/new", {
            method : "POST",
            mode: "cors",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json",
                
            },
            body: JSON.stringify({name:name, quantity:quantity})
        }).then(this.props.refreshPage);
            
    }
    handleKeypress (e) {
        const characterCode = e.key
        if (characterCode === 'Backspace') return
        const characterNumber = Number(characterCode)
        if (characterNumber !==0 ) {
          if (e.currentTarget.value && e.currentTarget.value.length) {
            return
          } else if (characterNumber === 0) {
            e.preventDefault()
          }
        } else {
          e.preventDefault()
        }
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
                <form 
                    action="https://i3g96.sse.codesandbox.io/coins/new" 
                    method="POST"
                    onSubmit={event=>this.handleSubmit(event)}
                >

                    <table className="transaction__input">
                    
                        <label>
                            Coin:
                            <select name="coin">{this.renderOptions()}</select>
                        </label>
                        <label>
                            Quantity:
                          <input type="number" name = "quantity"  placeholder = "Quantity" required="required" onKeyDown={this.handleKeypress} />
                        </label>
                        
                    </table>
                    <div className="transaction__button">
                        <button type="submit" className="trade__button buy" onClick={this.props.handleSubmit}>Buy</button>
                        <button type="submit" className="trade__button sell"  onClick={this.props.handleSubmit}>Sell</button>
                        {/* {this.state.showName} */}
                    </div>
                </form>
            </div>
        )
    }
}

export default Transaction;
