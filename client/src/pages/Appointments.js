import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DateTimePicker from 'react-datetime-picker';
import "react-datetime-picker/dist/DateTimePicker.css";


const localizer = momentLocalizer(moment)

const myEventsList = [
  {
    title: "Birthday",
    start: new Date(2021, 10, 15, 11, 0, 0, 0),
    end: new Date(2021, 10, 15, 11, 3, 0, 0)
  },
  {
    title: "thanksgiving",
    start: new Date(2021, 10, 25, 11, 0, 0, 0),
    end: new Date(2021, 10, 25, 11, 3, 0, 0)
  }
];

function MyCalendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(myEventsList)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }    

  return (
    <div >
      <h2 className= "appointment-scheduler">Schedule an Appointment</h2>
      <div className= "appointment-scheduler">
        {/* <input type="text" placeholder="add title" style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        /> */}
        <form action="/action_page.php">
          <label for="salon">Choose a service:</label>
          <select defaultvalue={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
            <option value="">Cuts</option>
            <option value="Men's">Men's $20</option>
            <option value="Women's Short">Women's Short $30</option>
            <option value="Women's Long">Women's Long $35</option>
            <option value="Blow Out">Blow Out $25</option>
            <option value="Kids">Kids $20</option>
          </select>   
          <select defaultvalue={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
            <option value="">Colors</option>
            <option value="Partial Highlight">Partial Highlight $70</option>
            <option value="Root Re-Touch">Root Re-Touch $70</option>
            <option value="All Over">All Over From $80 and Up</option>
            <option value="Balyage">Balyage from $100 and Up</option>
            <option value="Highlights">Highlights $120</option>
            <option value="Additional Color">Additional Color $10 Each</option>
            <option value="Color Correction">Color Correction Starts at $100</option>
          </select> 
          <select defaultvalue={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
            <option value="">Facial Wax</option>
            <option value="EyeBrows">EyeBrows $12</option>
            <option value="Lip">Lip $12</option>            
          </select>        
        </form>
        <DateTimePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          value={newEvent.start}  
          className="date-time-picker"        
        />
        {/* <DateTimePicker
          placeholderText="End Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
          value={newEvent.end}          
        /> */}
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Schedule
        </button>
      </div>

      {/* <h2>Cuts</h2>
      <ul>
        <a><li>Men's $20</li></a>
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
      </ul> */}


      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor={(newEvent) => { return moment(newEvent.start).add(1, 'h') }}
        style={{ height: 500, margin: "50px" }}
        defaultView="week" 
        className="calendar"
      />
    </div>
  )  
}


export default MyCalendar;