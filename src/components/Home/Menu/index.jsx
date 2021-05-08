import React from 'react';
import { menuItems } from './data';
import './styles.css';

const Menu = ({ menuItemClicked }) => (
  <nav>
    <ul>
      {menuItems.map(({ label, id }) => (
        <li id={label} key={id} onClick={menuItemClicked}>
          {label}
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
