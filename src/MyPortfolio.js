import React, { Component } from 'react';
import './MyPortfolio.css'

export default class MyPortfolio extends Component {
  
    componentDidMount(){
        this.props.loadPortfolio();
    }
    render() {
        let portfolioItems =  this.props.portfolio.map(({ CoinBalance, name}) => (
            <tr key={name} id="myList">
                <td> {name.replace("-", " ")}</td>
                <td>{CoinBalance}</td> 
            </tr>
            ))
        

        return (
            <div className="portfolio">
                <h1 className="portfolio__heading__one">Portfolio</h1>
                <div className="portfolio__table__head">
                <h4>Name</h4>
                <h4>Quantity</h4>
                </div>
                    <table className="portfolio__table">
                        {portfolioItems}
                    </table>
            </div>
        )
    }
}
