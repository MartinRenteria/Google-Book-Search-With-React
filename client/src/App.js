import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import SearchBar from "./components/Form";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Header />
          <SearchBar />
        </div>
      </Router>
    )
  };
};

export default App;