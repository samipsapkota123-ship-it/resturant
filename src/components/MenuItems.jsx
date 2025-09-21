import React from "react";
import { NavLink } from "react-router-dom";
const MenuItems = (props) => {
  return (
    <li >
  
      <NavLink to={props.path} 
      className={({isActive})=>`flex items-center gap-1 hover:text-link-color ${isActive? 'text-link-color':'text-black'}` }> 
       <span>{props.itemIcon}</span> 
       {props.itemLabel} 
       </NavLink>
    </li>
  );
};

export default MenuItems;