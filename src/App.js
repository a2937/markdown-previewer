import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Previewer from "./Previewer";
import About from "./About";


class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Previewer />} />
        <Route path="about" element={<About />} />
      </Routes>
    );
  }

}

export default App; 
