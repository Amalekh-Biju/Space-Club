import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [activeNav, setActiveNav]= useState('/')
  return (
    <nav>
      <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome className='icon'/> <p>Home</p></Link>
      <Link to="/article" onClick={() => setActiveNav('/article')} className={activeNav === '/article' ? 'active' : ''}><AiOutlineUser className='icon'/><p>Articles</p></Link>
      <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome className='icon'/> <p>Calender</p></Link>
      <Link to="/solar" onClick={() => setActiveNav('/solar')} className={activeNav === '/solar' ? 'active' : ''}><AiOutlineHome className='icon'/> <p>Solar</p></Link>
    </nav>
  )
}

export default Nav