import React, { useEffect } from 'react'
import './nav.css'
import { Helmet } from 'react-helmet'
import { FaHome } from "react-icons/fa";
import LOGO from '../../assets/logosiaa.png'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { PiEyeClosedBold } from 'react-icons/pi'
import './nav.js'

const clear = (el) => {
	const dad = el.parentElement;
	for (let i of dad.children) {
		i.className = '';
	}
};
const navElements = ['home', 'likes', 'search', 'user'];



const Nav = () => {
useEffect(() => {
		document.querySelectorAll('.container ul li').forEach(
		  (e, i) =>
			(e.onclick = function () {
			  clear(this);
			  this.classList.toggle('active');
			  e.classList.add(navElements[i]);
			})
		);
	  }, []);
	
  return (
    <div className="nav">
		<div class="container">
			<ul>
				<li class="active home">
					<i class="fa fa-home"></i>
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

export default Nav