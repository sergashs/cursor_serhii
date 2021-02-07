import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import s from './Navbar.module.css'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
   margin-left: auto;
  margin-right: 20px; 
  }
  
`

const Navbar = () => {
  return (
    <Nav>


      
      <Burger />
    </Nav>
  )
}

export default Navbar