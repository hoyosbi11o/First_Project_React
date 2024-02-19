import React from 'react'
import './Items.css'
import { NavLink } from 'react-router-dom'

export const Items = ({content,routes}) => <li><NavLink to={routes}>{content}</NavLink></li>
