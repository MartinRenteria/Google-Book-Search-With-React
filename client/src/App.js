import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route exact path="/saved/:id" component={SavedBooks} />
          </Switch>
        </div>
      </Router>
    )
  };
};

export default App;