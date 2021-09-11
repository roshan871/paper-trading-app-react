import "./App.css";
import React, { Component } from "react";
import Transaction from "./Transaction";
import RemainingBalance from "./RemainingBalance";
import History from "./History";
import MyPortfolio from "./MyPortfolio";
// import { makeStyles } from "@material-ui/core/styles";
import Avatar from "./Avatar"


const API_URL = "https://i3g96.sse.codesandbox.io/cryptos";




export class App extends Component {
    
    state = {
        coins : {},
        cryptos : {}

    };
   

    componentDidMount(){
        fetch(API_URL)
            .then((x) => x.json())
            .then((coins) => {
              this.setState({ coins: coins});
            //   console.log("coins >>>",coins);
            });
         }
        
        renderOptions(){
            return Object.keys(this.state.coins).map((key) => (
                <option value={key.toString()}>{key}</option>
            ));
        }
        refreshPage = () => {
            fetch("https://i3g96.sse.codesandbox.io/coins")
            .then((res) => res.json())
            .then(( cryptos ) => {
                this.setState({ cryptos : cryptos})
                // console.log("COINS", cryptos)
            });
        }
        
    render() {
        const coinValues = Object.entries(this.state.coins).map((cryptoData) =>{ 
            let price;
            if (typeof cryptoData[1] === 'number') {
                price = cryptoData[1].toFixed(2);
            } else {
                // This prints garbage because of bad refreshPage setState. Fix it.
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
                        <h1 className="app__heading">Paper Trading App</h1>
                        <Avatar />
                        <RemainingBalance />
                        <h2>Cryptocurrencies </h2>
                        <div className="app__table__head">
                            <h4>Name</h4>
                            <h4>Unit price</h4>
                        </div>
                        <table className="app__table">{coinValues}</table>
                        <Transaction refreshPage={this.refreshPage} coins={this.state.coins} />
                    </div>
                    <div className="app__right">
                        <MyPortfolio />  
                        <History />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

