import "./App.css";
import React, { Component } from "react";
import Form from "./Form";

const API_URL = "https://5dfmr.sse.codesandbox.io/cryptos";

export class App extends Component {
    state = {
        coins : {}
    };

    componentDidMount(){
        fetch(API_URL)
            .then((x) => x.json())
            .then((coins) => {
              this.setState({ coins: coins});
            });
        }
        renderCryptoPrices(){
            return Object.entries(this.state.coins).map((cryptoData) => (
                <li key={cryptoData.toString()}>
                    {cryptoData[0]}: {cryptoData[1]}
                </li>
            ));
        }
        
        renderOptions(){
            return Object.keys(this.state.coins).map( (key) => (
                <option value={key}>{key}</option>
            ));
        }
    render() {
        return(
            <div className="App">
                <h1>Paper trading app</h1>
                <p>Balance : $10000</p>
                <h2>Cryptos</h2>
                <ul>{this.renderCryptoPrices()}</ul>
                <Form />
            </div>
        )
    }
}

export default App;

