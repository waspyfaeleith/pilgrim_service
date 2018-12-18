import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <Link to="/yellowTShirts">Helpers</Link>
        </li>
        <li className="navLink">
          <Link to="/yellowTShirts/new">Add New Helper</Link>
        </li>
        <li className="navLink">
          <Link to="/pilgrims">Pilgrims</Link>
        </li>
        <li className="navLink">
          <Link to="/pilgrimes/new">Add New Pilgrim</Link>
        </li>
        <li className="navLink">
          <Link to="/outings" >Outings</Link>
        </li>
        <li className="navLink">
          <Link to="/outings/new" >Create Outing</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
