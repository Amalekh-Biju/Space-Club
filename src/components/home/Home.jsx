import React from 'react'
import { ReactDOM } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import '../nav/nav.css'

const Home = () => {
  const [activeNav, setActiveNav]= useState('/solar')
  return (
	<div class="Home">
		 <div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
		
		<div id='title'>
			<span>
			Welcome To 
			</span>
			<br/><br/>
			<h1>SIA MITS</h1>
		</div>
		<Link to="/solar" > <button>Solar Explorer</button></Link>
	</div>
  )
}

export default Home