import React, { Component } from 'react';
import {BrowserRouter, Route,} from 'react-router-dom'



//import screens
import Main from './Screens/index'
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register'
import Agreement from './Screens/Pages/Agreement';

class Router extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Route exact path="/" component={Main}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Register" component={Register}/>
                    <Route path="/Agreement" component={Agreement}/>   
                     
                </BrowserRouter>
        );
    }
}

export default Router;