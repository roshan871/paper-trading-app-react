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
            <div>
            <h1>Porfolio</h1>
                <table className="table_portfolio">
                    {this.state.portfolio.map(({ CoinBalance, name}) => (
                    <thead>
                        <tr key={name}>
                            <td> {name}</td>
                            <td>{CoinBalance}</td> 
                        </tr>
                    </thead>
                    ))}
                </table>
            
                
            </div>
        )
    }
}
