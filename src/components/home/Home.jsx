import React from 'react'
import './home.css';
import '../nav/nav.css'
import { motion } from "framer-motion";
const Home = () => {
	const text2 = "S.I.A.".split(".");
	const text1 = "M.I.T.S".split(".");

	return (
		<><div className="Home flex justify-center">
			<div id="title" className=' flex flex-col  items-center fixed left-0 right-0 text-white text-center font-lato font-light text-5xl tracking-widest pl-10 pt-0 top-20%'>
				<span>
					Welcome To
				</span>
				<br /><div>
					{text2.map((el2, i) => (
						<motion.span className='h1'

							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 4,
								delay: i / 10,
							}}
							key={i}
						>
							{el2}{""}
						</motion.span>
					))}
					<br />
					{text1.map((el, i) => (
						<motion.span className='h1'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 4,
								delay: i / 3,
							}}
							key={i}
						>
							{el}{""}
						</motion.span>
					))}

				</div>

			</div>
		</div></>
	)
}

export default Home