import React, { Component } from 'react';
import "./History.css";

export default class history extends Component {
    
    componentDidMount(){
        this.props.loadHistory();
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
                <div className="table-container">
                    <table className="history__table">
                        <tr className="history__table__head">
                            <th>Name</th>
                            <th>Unit price</th>
                            <th>Date</th>
                        </tr>
                        {this.props.history.map(({ id, name, quantity, unit_price, date }) => (
                                <tr key={date} >
                                    <td> {name.replace("-", " ")}<br/>{quantity} { quantity === 1 | quantity < 1 ? "token" : "tokens"}</td>
                                    <td>${Math.round(unit_price).toFixed(2)}</td>
                                    <td>{new Date(date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                    </table>
                </div>
        </div>
    )
}
}
