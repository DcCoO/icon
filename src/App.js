import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import World from "./pages/World";
import List from "./pages/List";
import File from "./pages/File";

import { 
    BrowserRouter as Router, 
    Redirect, 
    Switch, 
    Route 
} from "react-router-dom";

export default function App() {
    
    return (
        <Router>
            <Route exact path="/" component={World}/>
            <Route exact path="/file" component={File}/>
            <Route exact path="/list" component={List}/>
            <Redirect to="/" />
        </Router>
    );
    


    /*
    return (
        <Router>
            <div className = "App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/file" exact component={File} />
                    <Route path="/list" exact component={List} />
                </Switch>
            </div>
        </Router>
    );*/
}

