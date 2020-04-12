
import React from "react";
import Navbar from './Navbar'

import "./Header.css";


class Header extends React.Component {
  render() {
    return <div className="Header">

        <Navbar /> 
    </div>;
  }
}

export default Header;