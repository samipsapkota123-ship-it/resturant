import React from "react";
import { NavLink } from 'react-router-dom'
const MenuItems = (props) => {
  return (
    <li >
  
      <NavLink to={props.path} 
      className={({isActive})=>`flex items-center gap-1 hover:text-blue-800 ${isActive? 'text-blue-800':'text-black'}` }> 
       <span>{props.itemIcon}</span> 
       {props.itemLabel} 
       </NavLink>
    </li>
  );
};

export default MenuItems;