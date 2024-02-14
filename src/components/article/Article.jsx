import React from 'react'
import Artcomp from './arti.jsx'
import './article.css'
const Article = () => {
const art = [
  {
 // UNLOCKING THE SECRETS OF CORONAL HOLES: UNDERSTANDING THEIR INFLUENCE ON EARTH'S SPACE WEATHER

    // Author- Arsha R Kumar
    
    // This article contains the secrets of 
    // coronal holes, shedding light on their captivating features and their impact on Earth's space weather.

   


    name:'UNLOCKING THE SECRETS OF CORONAL HOLES:',
    author:'Arsha R Kumar',
    pesc:' UNDERSTANDING THEIR INFLUENCE ON EARTH`S SPACE WEATHER. ',
    desc:'+                                      This article contains the secrets of Integer hendrerit feugiat massa accumsan commodo.coronal holes, shedding light on their captivating features and their impact on Earth`s space weather.',
    url:"https://drive.google.com/file/d/179Po3F95Y1LTLO5-2kIEVjrz5Vy1fAPz/view?usp=drive_link"
  },
  {
    name:'Microgravity Research in Biomedical  Studies',
    author:'Arsha R Kumar',
    pesc:'Microgravity, as experienced in space environments, offers a unique setting for scientific exploration. ',
    desc:'  The implications of microgravity on biological systems, medicine development, and material sciences, emphasizing its relevance to advancements on Earth.',
    url:'https://drive.google.com/file/d/13Z9qdKIJ8XaT88-SPS_p5uUsumVjM0RB/view?usp=drive_link'
  },

  {
    name:'Article 3',
    author:'Author',
    desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in neque in purus dictum sodales in non lorem. Integer hendrerit feugiat massa accumsan commodo. Integer nisl erat, cursus at lorem non, rhoncus convallis sem.',
    url:'../../files/art3.pdf'
  },

] ;

  return (
 
<div class="Home">
		 <div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
		
<div className='new'>

    {art.map((value,index) => (
  <Artcomp key={index} name={value.name} pesc={value.pesc} desc={value.desc} author={value.author} url={value.url} />
  
  
  ))}
   </div>
    </div>
 
    )
}

export default Article