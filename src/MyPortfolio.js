import React, { Component } from 'react';
import './MyPortfolio.css'

export default class MyPortfolio extends Component {
    state = {
        portfolio : [],
    }
    componentDidMount(){
        fetch('https://i3g96.sse.codesandbox.io/portfolio')
        .then(x => x.json())
        .then((portfolio) => {
            this.setState({portfolio : portfolio})
            console.log('pofolio', portfolio);
        })
    }
    render() {
        let portfolioItems =  this.state.portfolio.map(({ CoinBalance, name}) => (
            <tr key={name} id="myList">
                <td> {name.replace("-", " ")}</td>
                <td>{CoinBalance}</td> 
            </tr>
            ))
        var newItem = document.createElement("div");
        var textnode = document.createTextNode(portfolioItems);
        newItem.appendChild(textnode);
        // var list = document.getElementsByClassName("portfolio__table");
        // list.insertBefore(newItem, list.myList[0]);

        return (
            <div className="portfolio">
                <h1 className="portfolio__heading__one">Portfolio</h1>
                <div className="portfolio__table__head">
                <h4>Name</h4>
                <h4>Quantity</h4>
                </div>
                    <div className="portfolio__table">
                        {portfolioItems}
                    </div>
            </div>
        )
    }
}
