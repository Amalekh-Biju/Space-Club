import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { BiMessageSquareDetail} from 'react-icons/bi'
import { SlCalender } from "react-icons/sl";
import {GiGalaxy} from 'react-icons/gi'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  const [activeNav, setActiveNav]= useState('/')
  return (
    <nav className=' bg-white w-max p-3 fixed  gap-9  left-1/2 transform -translate-x-1/2 bottom-8 flex  rounded-3xl backdrop-blur-md transition-all duration-30 z-10'>
      <Link to="/" onClick={() => setActiveNav('/')} className={`flex items-center rounded-full p-3 transition-all duration-500 ${activeNav === '/' ? 'bg-black text-white ' : 'bg-transparent text-black'}`}><AiOutlineHome className='icon'/> <p className={`${activeNav === '/' ? '' : 'hidden'}`}>Home</p></Link>
      <Link to="/article" onClick={() => setActiveNav('/article')} className={`flex items-center rounded-full p-3 transition-all duration-500 ${activeNav === '/article' ? 'bg-black text-white' : 'bg-transparent text-black'}`}><BiMessageSquareDetail className='icon'/><p className={`${activeNav === '/article' ? '' : 'hidden'}`} >Articles</p></Link>
      <a href="/solar.html"  className={`flex items-center rounded-full p-3 transition-all duration-500 ${activeNav === '/solar' ? 'bg-black text-white' : 'bg-transparent text-black'}`}> <GiGalaxy className="icon" /></a>

      <Link to="/cal" onClick={() => setActiveNav('/cal')}className={`flex items-center rounded-full p-3 transition-all duration-500 ${activeNav === '/cal' ? 'bg-black text-white' : 'bg-transparent text-black'}`}><SlCalender className='icon'/> <p className={`${activeNav === '/cal' ? '' : 'hidden'}`}>Calender</p></Link>


    </nav>
  )
}

export default Nav