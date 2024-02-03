import React from 'react'
import { ReactDOM } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
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
			<h1>Space Club MITS</h1>
		</div>
		<a href="#aim"><button>Read More</button></a>
	</div>
  )
}

export default Home