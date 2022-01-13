import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

function NavBar() {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <span className='logo'>Addis </span>Tour
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#map">Map</a>
          </li>
        </ul>
        <div className='profile'></div>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={() => setNavbarState(false)}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#map" onClick={() => setNavbarState(false)}>
              Reviews
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>

  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 600;
      
    }
    .logo{
        font-size: 34px;
        color: #0077b6;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  .profile {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    background-color:  #0077b6;
    font-size: 1.1rem;
   
    transition: 0.3s ease-in-out;
    
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    .profile {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;


export default NavBar

