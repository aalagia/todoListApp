import React, { Component } from "react";


import { BrowserRouter, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "../components/create-todo.component";
import EditTodo from "../components/edit-todo.component";
import TodosList from "../components/todos-list.component";

//import logo from "./logo.png";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:this.props.match.params.username
        }
      }
  render() {
      const { username } = this.state;
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <h1>{username}</h1>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to={"/list/"+username} className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to={"/create/"+username} className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route exact path="/list/:username" component={TodosList} />
          
            <Route path="/edit/:username/:id" component={EditTodo} />
            <Route path="/create/:username" component={CreateTodo}/>
         
        </div>
      </BrowserRouter>
    );
  }
}

export default Homepage;
