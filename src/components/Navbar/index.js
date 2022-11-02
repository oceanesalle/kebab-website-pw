import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'; 

const index = () => {
  return (
    <Nav>
      <NavLink to='/'>Kebab</NavLink>
      <NavIcon>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  )
}

export default index