import React, { Component } from 'react';
import './About.css';
import notebook from './images/notebook.jpg';
import Navbar from "./components/Navbar";
class About extends Component {

  render() {

    return (

      <div id="body">
        <Navbar></Navbar>
        <h1>Markdown previewer</h1>
        <p>This app lets you render markdown into html.</p>
        <p>Learn more about markdown <a href="https://www.markdowntutorial.com/">here.</a></p>
        <img src={notebook} alt="notebook" height="15%" width="15%" />
      </div>
    );
  }
}


export default About;
