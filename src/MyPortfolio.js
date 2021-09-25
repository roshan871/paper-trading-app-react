import React, { Component } from 'react';
import './MyPortfolio.css'

export default class MyPortfolio extends Component {
  
    componentDidMount(){
        this.props.loadPortfolio();
    }
    render() {
        let portfolioItems =  this.props.portfolio
            .filter(({CoinBalance}) => CoinBalance !== 0)
            .map(({CoinBalance, name}) => (
                <tr key={name} id="myList">
                    <td> {name.replace("-", " ")}</td>
                    <td>{CoinBalance}</td>
                </tr>
            ))
        
        return (
            <div className="portfolio">
                <h1 className="portfolio__heading__one">Portfolio</h1>
                <div className="portfolio__container">
                    <table className="portfolio__table">
                        <tr className="portfolio__table__head" >
                            <th>Name</th>
                            <th>Quantity</th>
                        </tr>
                        {portfolioItems}
                    </table>
                </div>
                    
            </div>
        )
    }
}
