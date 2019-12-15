import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  
  constructor(props) {
  	super(props);
  	this.state = {

  	}
  }	

  render() {
  	return (
  	  <div className='header'>
  	  	<NavLink to="/signin">
          Sign In
        </NavLink>
        <NavLink to="/signup">
          Sign Up
        </NavLink>
  	  </div>
  	)
  }
}

export default Header;