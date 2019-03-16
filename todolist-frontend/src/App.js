import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


import Homepage from "./components/homepage.component";
import User from "./components/user.component";


class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <div className="container">
          <Route path="/" exact component={User} />
          <Route path="/home/:username" component={Homepage} />
          </div>
        </BrowserRouter>
          
    );
  }
}

export default App;