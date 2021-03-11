import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Header from "./components/Header";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Header />
        </div>
      </Router>
    )
  };
};

export default App;