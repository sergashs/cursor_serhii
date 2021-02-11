import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = () =>{
    return(
     <ul className={s.menu}>
     <li className={s.menuItem}><NavLink className={s.menuLink} to="/profile">My page</NavLink></li>    
     <li className={s.menuItem}><a className={s.menuLink} href="#">Feed</a></li>  
     <li className={s.menuItem}><NavLink className={s.menuLink} to="/messages">Messages</NavLink></li>   
     </ul>
    )
}


export default Menu;