import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>
    )
  };
};

export default App;