import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './../App.css'
import './../Sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/desserts">
        Appetizer
      </a>
      <a className="menu-item" href="/">
        Breakfast
      </a>
      <a className="menu-item" href="/salads">
        Lunch
      </a>
      <a className="menu-item" href="/pizzas">
        Dinner
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
      <a className="menu-item" href="/desserts">
        Snacks
      </a>
      <a className="menu-item" href="/desserts">
        Beverages
      </a>
      
      <a className="menu-item" href="/desserts">
        Specials
      </a>
    </Menu>
  );
};