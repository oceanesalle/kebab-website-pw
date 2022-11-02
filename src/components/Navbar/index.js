import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'; 

const index = ({toggle}) => {
  return (
    <Nav>
      <NavLink to='/'>Kebab</NavLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  )
}

export default index