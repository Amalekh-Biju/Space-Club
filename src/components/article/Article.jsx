import React from 'react'
import Artcomp from './arti.jsx'
import './article.css'
const Article = () => {
const art = [
  {
    name:'Article 1',
    author:'Author',
    desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in neque in purus dictum sodales in non lorem. Integer hendrerit feugiat massa accumsan commodo. Integer nisl erat, cursus at lorem non, rhoncus convallis sem.',
    url:"../../files/art1.pdf"
  },
  {
    name:'Article 2',
    author:'Author',
    desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in neque in purus dictum sodales in non lorem. Integer hendrerit feugiat massa accumsan commodo. Integer nisl erat, cursus at lorem non, rhoncus convallis sem.',
    url:'../../files/art2.pdf'
  },

  {
    name:'Article 3',
    author:'Author',
    desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in neque in purus dictum sodales in non lorem. Integer hendrerit feugiat massa accumsan commodo. Integer nisl erat, cursus at lorem non, rhoncus convallis sem.',
    url:'../../files/art3.pdf'
  },

] ;

  return (
  <section className='mains'  >
<div class="Home">
		 <div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
		
<div className='new'>

    {art.map((value,index) => (
  <Artcomp key={index} name={value.name} desc={value.desc} author={value.author} url={value.url} />
  
  
  ))}
   </div>
    </div>
  </section>
    )
}

export default Article