import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Login from '../pages/Login';
import Register from '../pages/Register';
import Product from '../pages/Product';

export default () => {
    return (
            <BrowserRouter>
                <Route path="/" exact component={Login}/>
                <Route path="/cadastro" exact component={Register}/>
                <Route path="/produto" exact component={Product}/>
            </BrowserRouter>
    )
}