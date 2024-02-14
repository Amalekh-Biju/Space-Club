import React from 'react'
import './cal.css'
import './cal.js'

const Cal = () => {
  return (
    <div className="cal">
      <div className="calendar" id="calendar-app">
        <div className="calendar--day-view" id="day-view">
          <span className="day-view-exit" id="day-view-exit">&times;</span>
          <span className="day-view-date" id="day-view-date">MAY 29 2016</span>
          <div className="day-view-content">
            <div className="day-highlight">
              You <span className="day-events" id="day-events">had no events for today</span>. &nbsp; <span tabindex="0" onkeyup="if(event.keyCode != 13) return; this.click();" className="day-events-link" id="add-event" data-date>Add a new event?</span>
            </div>
            <div className="day-add-event" id="add-day-event-box" data-active="false">
              <div className="row">
                <div className="half">
                  <label className="add-event-label">
                    Name of event
                    <input type="text" className="add-event-edit add-event-edit--long" placeholder="New event" id="input-add-event-name"></input>

                  </label>
                </div>
                <div className="qtr">
                  <label className="add-event-label">
                    Start Time
                    <input type="text" className="add-event-edit" placeholder="8:15" id="input-add-event-start-time" data-options="1,2,3,4,5,6,7,8,9,10,11,12" data-format="datetime"></input>
                    <input type="text" className="add-event-edit" placeholder="am" id="input-add-event-start-ampm" data-options="a,p,am,pm"></input>
                  </label>
                </div>
                <div className="qtr">
                  <label className="add-event-label">
                    End Time
                    <input type="text" className="add-event-edit" placeholder="9" id="input-add-event-end-time" data-options="1,2,3,4,5,6,7,8,9,10,11,12" data-format="datetime"></input>
                    <input type="text" className="add-event-edit" placeholder="am" id="input-add-event-end-ampm" data-options="a,p,am,pm"></input>
                  </label>
                </div>
                <div className="half">
                  <a onkeyup="if(event.keyCode != 13) return; this.click();" tabindex="0" id="add-event-save" className="event-btn--save event-btn">save</a>
                  <a tabindex="0" id="add-event-cancel" className="event-btn--cancel event-btn">cancel</a>
                </div>
              </div>

            </div>
            <div id="day-events-list" className="day-events-list">

            </div>
            <div className="day-inspiration-quote" id="inspirational-quote">
              Every child is an artist.  The problem is how to remain an artist once he grows up. –Pablo Picasso
            </div>
          </div>
        </div>
        <div className="calendar--view" id="calendar-view">
          <div className="cview__month">
            <span className="cview__month-last" id="calendar-month-last">Apr</span>
            <span className="cview__month-current" id="calendar-month">May</span>
            <span className="cview__month-next" id="calendar-month-next">Jun</span>
          </div>
          <div className="cview__header">Sun</div>
          <div className="cview__header">Mon</div>
          <div className="cview__header">Tue</div>
          <div className="cview__header">Wed</div>
          <div className="cview__header">Thu</div>
          <div className="cview__header">Fri</div>
          <div className="cview__header">Sat</div>
          <div className="calendar--view" id="dates">
          </div>
        </div>
        <div className="footer">
          <span><span id="footer-date" className="footer__link">Today is May 30</span></span>
        </div>
      </div>
    </div>
  )
}

export default Cal