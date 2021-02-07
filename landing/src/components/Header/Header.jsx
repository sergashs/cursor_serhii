import React from 'react';
import s from './Header.module.css'
import Logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import LoginForm from './LoginForm/LoginForm';


const Header = () =>{
    return(
     <header className={s.Header}>
        <img src={Logo} /> 
        <Navbar />
        <LoginForm />
     </header> 
    )
}


export default Header;