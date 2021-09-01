import React, { Component } from 'react'

export default class history extends Component {
    state = {
        history: [],
    };
    
    componentDidMount(){
        fetch("https://i3g96.sse.codesandbox.io/history")
            .then((x) => x.json())
            .then((history) => {
            this.setState({history : history})
            // console.log("HISTORY>>>",history) //Gives array of an object
            
})
}




        
    render() {
        return (
            <div className="history ">
            <h1>History</h1>
                <table className="table">
                    {this.state.history.map(({ id, name, quantity, unit_price, date }) => (
                    <thead>
                        <tr key={id.date}>
                            <td> {name}<br/>{quantity} { quantity === 1 | quantity < 1 ? "token" : "tokens"}</td>
                            <td>{Math.round(unit_price).toFixed(2)}</td>
                            <td>{new Date(date).toLocaleDateString()}</td>
                        </tr>
                    </thead>
                    ))}
                </table>
            </div>
        )
    }
}
