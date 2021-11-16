import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        title: "Haircut",
        start: new Date(2021, 10, 15),
        end: new Date(2021, 10, 15)
    }
];

function MyCalendar() {    

    return (
      <div className="container">
        <div className="flex-row px-2">
      <div>
        <h2>Cuts</h2>
        <ul>
          <li>Men's $20</li>
          <li>Women's Short $30</li>
          <li>Women's Long $35</li>
          <li>Blow Out $25</li>
          <li>Kids $20</li>
        </ul>

        <h2>Colors</h2>
        <ul>
          <li>Partial Highlight $70</li>
          <li>Root Re-Touch $70</li>
          <li>All Over From $80 and Up</li>
          <li>Balyage from $100 and Up</li>
          <li>Highlights $120</li>
          <li>Additional Color $10 Each</li>
          <li>Color Correction Starts at $100</li>
        </ul>

        <h2>Facial Wax</h2>
        <ul>
          <li>EyeBrows $12</li>
          <li>Lip $12</li>
        </ul>
      </div>
      <div>
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
        />
      </div> 
    </div>
      </div>
    
    )
}


export default MyCalendar;