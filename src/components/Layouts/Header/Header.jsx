import React from 'react'
import {Logo} from '../../Logo/Logo'
import {NavBar} from '../../NavBar/NavBar'
import './Header.css' 


export const Header = ({children}) => {
  return (
    <header>{children}</header>
  )
}
