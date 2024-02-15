import React from 'react'
import './cal.css'

const Cal = () => {
  return (
    <div className="calmain">
      		 <div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>

<iframe id='calen' src="https://calendar.zoho.in/zc/ui/embed/#calendar=zz08021230f3facd698535d10ee0a76cff1156243b8ae7dfab49d38a1d9541707bc2079135223c4514c8a94afd57d42cb067bdf2dc&title=Space%20Club&type=6&language=en&timezone=Asia%2FKolkata&showTitle=1&showTimezone=1&startingDayOfWeek=0&timeFormat=0&color=6"width="1350" height="720" frameBorder="0" scrolling="no" loading='eager'></iframe>
    </div>
  )
}

export default Cal