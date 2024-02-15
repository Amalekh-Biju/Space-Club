import React from 'react'
import './cal.css'

const Cal = () => {
  return (
    <div className="cal">

<div class="spinner-box">
  <div class="blue-orbit leo">
  </div>

  <div class="green-orbit leo">
  </div>
  
  <div class="red-orbit leo">
  </div>
  
  <div class="white-orbit w1 leo">
  </div><div class="white-orbit w2 leo">
  </div><div class="white-orbit w3 leo">
  </div>
</div>
      		 <div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
<iframe id='calen' src="https://calendar.zoho.in/zc/ui/embed/#calendar=zz08021230f3facd698535d10ee0a76cff1156243b8ae7dfab49d38a1d9541707bc2079135223c4514c8a94afd57d42cb067bdf2dc&title=Space%20Club&type=6&language=en&timezone=Asia%2FKolkata&showTitle=1&showTimezone=1&startingDayOfWeek=0&timeFormat=0&color=6"width="1350" height="720" frameBorder="0" scrolling="no"></iframe>
    </div>
  )
}

export default Cal