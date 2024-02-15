import React from 'react'
import { ReactDOM } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import '../nav/nav.css'
import { motion } from "framer-motion";
const Home = () => {
	// const text1= "S.p.a.c.e. .C.l.u.b".split(".");
	const text2 = "S.I.A..M.I.T.S".split(".");
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
			<br/><div>
			{
				text2.map((el2, i) => (
					<motion.span className='h1'
					
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.25,
						delay: i / 10,
					}}
					key={i}
					>
			          {el2}{" "}
        </motion.span>
      ))}
	  </div>
		
				<br/>
		{/* {
		text1.map((el, i) => (
        <motion.span className='h1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1.25,
            delay: i /10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))} */}
		</div>
	</div>
  )
}

export default Home