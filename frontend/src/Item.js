import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {

    constructor() {
        super();
        this.state = {
            name: "", 
            description: "", 
            price: 0,
            amount: 0
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit() {
        var name = this.state.name;
        var description = this.state.description;
        var price = parseInt(this.state.price);
        var amount = parseInt(this.state.amount);      
    
        axios.post('http://localhost:5555/item/add', {
            "name": name, 
            "description": description, 
            "price": price, 
            "amount": amount 
        }).then(
            
        ).catch(err => {
            alert(err);
        });
    }

    render() {
        return(
            <div>
                <h1>Add Item</h1>
                <form onSubmit={this.handleSubmit}>       
                    <input placeholder="Name" name="name" type="text" 
                    value={this.state.name.value} 
                    onChange={this.handleInputChange}/>
                    <input placeholder="Description" name="description" type="text" 
                    value={this.state.description.value} 
                    onChange={this.handleInputChange}/>          
                    <input placeholder="Price" name="price" type="text" 
                    value={this.state.price.value} 
                    onChange={this.handleInputChange}/>          
                    <input placeholder="Amount" name="amount" type="text" 
                    value={this.state.amount.value} 
                    onChange={this.handleInputChange}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default Item;