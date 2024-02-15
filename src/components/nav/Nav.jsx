import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GiGalaxy} from 'react-icons/gi'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [activeNav, setActiveNav]= useState('/')
  return (
    <nav>
      <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome className='icon'/> <p>Home</p></Link>
      <Link to="/article" onClick={() => setActiveNav('/article')} className={activeNav === '/article' ? 'active' : ''}><BiMessageSquareDetail className='icon'/><p>Articles</p></Link>
      <Link to="/solar" onClick={() => setActiveNav('/solar')} className={activeNav === '/solar' ? 'active' : ''}> <GiGalaxy className="icon" /><p>Our Solar System</p></Link>

    </nav>
  )
}

export default Nav