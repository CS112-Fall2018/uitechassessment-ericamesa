import React from "react";
import { BrowserRouter as BrowserRouter, Route, Link } from "react-router-dom";
import Cart from './Cart';
import Item from './Item';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/">
                    <button type="button"> Home </button>
                </Link>
                <Link to="/cartlist">
                    <button type="button"> Cart List </button>
                </Link>
                <Link to="/additem">
                    <button> Add Item </button>
                </Link>

                <Route exact path="/" component={Home} />
                <Route path="/cartlist" component={Cart} />
                <Route path="/additem" component={Item} />
            </div>
        </BrowserRouter>
    );
}

function Home() {
    return(
        <div>
        <h1>Home</h1>
    </div>
    );
}

export default App;