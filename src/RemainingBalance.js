import React, { Component } from 'react';
import './RemainingBalance.css';

export default class RemainingBalance extends Component {
    state = {
        balance : {}
    };
    componentDidMount(){
        fetch("https://i3g96.sse.codesandbox.io/balance")
        .then(response => response.json())
        .then(( balance ) => {
            this.setState({ balance :  balance});
            // console.log("REMAING BALANCE",balance);  
        });
        
    }
    
    renderBalance(){
		return Object.values(this.state.balance).map((myBalance) => {
			return (
				<li key={myBalance.name.toString()}>
					<h5>Welcome !{myBalance.name}</h5>
					<h5>Remaining balance:  ${myBalance.amount.toFixed()}</h5>
				</li>
			)
		})
	}
    render() {
        return (
            <div>
            <ul>{this.renderBalance()}</ul>
            </div>
        )
    }
}
