import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        axios.get('http://localhost:5555/list').then(
                res => {
                    this.setState({items: res.data})
                }
        ).catch(err => {
            alert(err);
        });
    }

    render() {
        return(        
            <div>
                <h1>Cart</h1>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                    {this.state.items.map(item => 
                        <tr>
                            <td>{item.name}</td>
                            <td key={item.id}>{item.description}</td>
                            <td key={item.id}>{item.price}</td>
                            <td key={item.id}>{item.amount}</td>
                        </tr>)}
                </table>
            </div>
        );
    }
}

export default Cart;