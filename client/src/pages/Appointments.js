import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const localizer = momentLocalizer(moment)

const myEventsList = [
  {
    title: "Birthday",
    start: new Date(2021, 10, 15, 11, 0, 0, 0),
    end: new Date(2021, 10, 19, 11, 0, 0)
  },
  {
    title: "Birthday",
    start: new Date(2021, 10, 25, 11, 0, 0, 0),
    end: new Date(2021, 10, 25, 14, 0, 0)
  }
];

function MyCalendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(myEventsList)

  function handleAddEvent() {
    // event.preventDefault();

    // try {
      
    // } catch (error) {
      
    // }

    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div>
      <h2>Add New Event</h2>
      <div>
        <input type="text" placeholder="add title" style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker placeholderText="End Date" style={{ marginRight: "10px" }} selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>

      <h2>Cuts</h2>
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
      </ul>


      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  )
}


export default MyCalendar;