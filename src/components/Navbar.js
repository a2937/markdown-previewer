import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {


  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Main page</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

          </ul>

        </nav>
      </header>
    );
  }

}

export default Navbar;
