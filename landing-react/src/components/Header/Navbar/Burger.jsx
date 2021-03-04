import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 40px;
  height: 40px;
  padding: 5px;
  z-index: 20;
  display: none;
  background: ${({ open }) => open ? 'transparent' : '#f9f9fa'};
  position: ${({ open }) => open ? 'fixed' : 'relative'};
  top: ${({ open }) => open ? '15px' : '0'};
  right: ${({ open }) => open ? '20px' : '0'};
  z-index: ${({ open }) => open ? '20' : '1'};
  cursor: pointer;



  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: ${({ open }) => open ? '#ccc' : '#c99047'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger