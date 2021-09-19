import "./App.css";
import React, { Component } from "react";
import Transaction from "./Transaction";
import RemainingBalance from "./RemainingBalance";
import History from "./History";
import MyPortfolio from "./MyPortfolio";
import Avatar from "./Avatar"
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import image from './Images/image.png'

const API_URL = "https://i3g96.sse.codesandbox.io/cryptos";

export class App extends Component {
    
    state = {
        coins : {},
        history: [],
        portfolio : [],
    };
    loadPortfolio = () => {
        fetch("https://i3g96.sse.codesandbox.io/portfolio")
            .then((x) => x.json())
            .then((portfolio) => {
                this.setState({portfolio : portfolio})
            });
    }

    loadHistory = () => {
        fetch("https://i3g96.sse.codesandbox.io/history")
            .then((x) => x.json())
            .then((history) => {
                this.setState({history : history})
            });
    }

    componentDidMount(){
        fetch(API_URL)
            .then((x) => x.json())
            .then((coins) => {
              this.setState({ coins: coins});
            });
         }

        renderOptions(){
            return Object.keys(this.state.coins).map((key) => (
                <option key={key} value={key}>{key}</option>
            ));
        }

        refreshPage = () => {
            this.loadPortfolio();
            this.loadHistory();
            fetch("https://i3g96.sse.codesandbox.io/cryptos")
            .then((res) => res.json())
            .then(( coins) => {
                this.setState({ coins : coins})
                // console.log("Refresh page", coins)
            });            
        }
        
    render() {
        const coinValues = Object.entries(this.state.coins).map((cryptoData) =>{ 
            let price;
            if (typeof cryptoData[1] === 'number') {
                price = cryptoData[1].toFixed(2);
            } else {
                price = cryptoData[1].unit_price.toFixed(2);
            }
            console.log(cryptoData, price);
            return (
                <tbody key={cryptoData.toString()}>
                    <tr>
                        <td>{cryptoData[0].replace(/-/," ")}</td>
                        <td>${price}</td>
                    </tr>
                </tbody>
            )
        });

        return(
            <div className="app">
                <div className="app__container">
                    <div className="app__left">
                        <h1 className="app__heading">Paper <span className="trading">Trading</span> App</h1>
                        <p className="note">⚠️ Temporarily the server side code is in codesandbox.So need to run the sever side code first to get fully loaded application</p>
                        <div className="container">
                            <RemainingBalance />
                            <Router>
                                <Link target={"_blank"} to={{  pathname:"https://codesandbox.io/s/zen-hamilton-i3g96?file=/src/index.js" }}><button className="server__button">Run Server</button></Link>
                            </Router> 
                        </div>
                        <Avatar />
                        <h2>Cryptocurrencies </h2>
                        <div className="app__table__head">
                            <h4>Name</h4>
                            <h4>Unit price</h4>
                        </div>
                        <table className="app__table">{coinValues}</table>
                        <Transaction refreshPage={this.refreshPage} coins={this.state.coins} />
                    </div>
                    <div className="app__right">
                        <MyPortfolio portfolio={this.state.portfolio} loadPortfolio={this.loadPortfolio} />  
                        <History history={this.state.history} loadHistory={this.loadHistory} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

