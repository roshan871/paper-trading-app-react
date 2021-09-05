import React, { Component } from 'react';
import "./History.css";

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
// function myFunction() {
//     var newItem = document.createElement("LI");
//     var textnode = document.createTextNode({history});
//     newItem.appendChild({history});
  
//     var list = document.getElementById("myList");
//     list.insertBefore(newItem, list.childNodes[0]);
//   }


  
render() {
    return (
        <div className="history">
            <h1>History</h1>
            <div className="history__table__head">
                <h4>Name</h4>
                <h4>Unit price</h4>
                <h4>Date</h4>
            </div>
                <div className="history__table">
                    {this.state.history.map(({ id, name, quantity, unit_price, date }) => (
                        <tr key={id.date} >
                            <td> {name}<br/>{quantity} { quantity === 1 | quantity < 1 ? "token" : "tokens"}</td>
                            <td>${Math.round(unit_price).toFixed(2)}</td>
                            <td>{new Date(date).toLocaleDateString()}</td>
                        </tr>
                    
                    ))}
                </div>
        </div>
    )
}
}
