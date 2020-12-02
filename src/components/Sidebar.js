import React from 'react';
import {Link} from 'react-router-dom'
import { elastic as Menu } from 'react-burger-menu';
import './../App.css'
import './../Sidebar.css'

export default props => {
  return (
    <Menu width = {150}>
      <Link to = '/appetizer'>
        <a className="menu-item" href="/appetizer">
          Appetizer
        </a>
      </Link>
      
      <Link to = '/breakfast'>
        <a className="menu-item" href="/breakfast">
          Breakfast
        </a>
      </Link>
      
      <Link to = '/lunch'>
        <a className="menu-item" href="/lunch">
          Lunch
        </a>
      </Link>
      
      <Link to = '/dinner'>
        <a className="menu-item" href="/dinner">
          Dinner
        </a>
      </Link>
      
      
      
      <Link to = "/beverages">
        <a className="menu-item" href="/beverages">
          Beverages
        </a>
      </Link>
      
      <Link to = "/specials">
        <a className="menu-item" href="/specials">
          Specials
        </a>
      </Link>
      
    </Menu>
  );
};