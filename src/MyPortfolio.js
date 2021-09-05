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
        return (
            <div className="portfolio">
                <h1 className="portfolio__heading__one">Portfolio</h1>
                <div className="portfolio__table__head">
                <h4>Name</h4>
                <h4>Quantity</h4>
                </div>
                    <table className="portfolio__table">
                        {this.state.portfolio.map(({ CoinBalance, name}) => (
                            <tbody>
                                <tr key={name}>
                                    <td> {name.replace("-", " ")}</td>
                                    <td>{CoinBalance}</td> 
                                </tr>
                            </tbody> 
                        ))}
                    </table>
            </div>
        )
    }
}
