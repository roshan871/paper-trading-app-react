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
            <div className="porfolio">
                <h1>Portfolio</h1>
                <div className="table__head">
                <h4>Name</h4>
                <h4>Quantity</h4>
                </div>
                    <div className="table">
                        {this.state.portfolio.map(({ CoinBalance, name}) => (
                            <tr key={name}>
                                <td> {name}</td>
                                <td>{CoinBalance}</td> 
                            </tr>
                        ))}
                    </div>
            </div>
        )
    }
}
