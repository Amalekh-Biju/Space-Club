import React from 'react'
import { ReactDOM } from 'react';
import './home.css';

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
        <br></br><br></br>
        <h1>Space Club MITS</h1>
    </div>
    <div class="container">
			<ul>
				<li class="active home">
					<i class="fa-solid fa-home"></i>
					<p>Home</p>
				</li>
				<li>
					<i class="fa fa-heart"></i>
					<p>Likes</p>
				</li>
				<li>
					<i class="fa fa-search"></i>
					<p>
						Search
					</p>
				</li>
				<li>
					<i class="fa fa-user"></i>
					<p>User</p>
				</li>
			</ul>
		</div>
		</div>
  )
}

export default Home