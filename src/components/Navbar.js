import React from "react";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {Link} from 'react-router-dom'
import "./Navbar.css";

class Navbar extends React.Component {

  menuHandler =()=>{

  }
  render() {
    return <div className="Navbar"> 
      
<Link to='/' >
<div className ='navItems home'>
<MaterialIcon id='homeIcon' icon="meeting_room" />
<span>Roombooking</span>
</div>
</Link>

{/* <div className ='navItems search'>
<input type = 'text' placeholder='Search...'/>
<span id='searchIcon'>
<MaterialIcon   icon="search"  />
</span>
</div> */}

<div className='left'>
<Link to='pricing'>
<div className ='navItems pricing'>Pricing & Services</div>
</Link>

<Link to='booking'>
<div className ='navItems booking'>Book Room</div>
</Link>

<Link to='signup'>
<div className ='navItems signup'>SignUP</div>
</Link>
</div>

<Link to='login'>
<div className ='navItems login'>Login</div>
</Link>

<div className ='navItems menu'>
<MaterialIcon id='menu' icon="menu" onClick={this.menuHandler} />
 </div>

 
    </div>;
  }
}

export default Navbar;

