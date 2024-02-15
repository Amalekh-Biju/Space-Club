import React from 'react'
import './arti.css'

const Arti = (prop) => {
  return (


    <div className="box">
      <div className='innerbox'>


        <div className="button1">{prop.name}</div>
        <div className='auth_desc'>
        <div className="author">{prop.author}</div>
        <div className="desc">{prop.pesc}</div>
        <div className="desc">{prop.desc}</div>
        </div>
      </div>
      <div className="space">
        <span style={{ "--i": 31 }} class="star"></span>
        <span style={{ "--i": 12 }} class="star"></span>
        <span style={{ "--i": 57 }} class="star"></span>
        <span style={{ "--i": 93 }} class="star"></span>
        <span style={{ "--i": 23 }} class="star"></span>
        <span style={{ "--i": 70 }} class="star"></span>
        <span style={{ "--i":  6 }} class="star"></span>
      </div>
      <a className='
      Btn1'
        href={prop.url}
        download={prop.name}
        target="_blank"
        rel="noreferrer"
      >
        <div className='Btn'>

        <button class="Btn">
          <svg
            class="svgIcon"
            viewBox="0 0 384 512"
            height="1em"
            
            >
            <path
              d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              ></path>
          </svg>
          <span class="icon2"></span>

        </button>
              </div>

      </a>
    </div>
  )
}
export default Arti