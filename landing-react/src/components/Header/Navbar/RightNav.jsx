import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  

  li {
    padding: 18px 10px;
  }

  .link {
    color: #878787;
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    background-color: #f8f7f3;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
z-index: 10;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a className="link" href="#">Моя доходность</a></li>
      <li><a className="link" href="#">Обзор доходности</a></li>
      <li><a className="link" href="#">посчитать доходность</a></li>
    </Ul>
  )
}

export default RightNav