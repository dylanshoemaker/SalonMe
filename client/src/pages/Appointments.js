import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DateTimePicker from 'react-datetime-picker';
import "react-datetime-picker/dist/DateTimePicker.css";
import AppointmentList from '../components/AppointmentList';
import { ADD_APPOINTMENT } from '../utils/mutations';
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_USER, QUERY_APPOINTMENTS } from "../utils/queries";


const localizer = momentLocalizer(moment);

const myEventsList = [
    {
        title: "Haircut",
        start: new Date(2021, 10, 15, 9, 0, 0),
        end: new Date(2021, 10, 15, 9, 0, 0)
    }
];

function MyCalendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(myEventsList)

  // const [addAppointment] = useMutation(ADD_APPOINTMENT);

  let verifyAppointment = false;

  function handleAddEvent() {
    if(newEvent) {
      verifyAppointment = true;
      try{
        ADD_APPOINTMENT({
        variables: { 
          title: newEvent.title,
          startTime: newEvent.start,
        }
      })
      } catch (e) {
        console.log(e);
      }
      
      setAllEvents([...allEvents, newEvent])
    }  
  }


  return (
    <div >
      <h2 className="appointment-scheduler">Schedule an Appointment</h2>
      <div className="appointment-scheduler">
        
        <form action="/action_page.php">
          <label for="salon">Choose a service:</label>
          <div>
            <select defaultvalue={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
              <option value="">Cuts</option>
              <option value="Men's">Men's $20</option>
              <option value="Women's Short">Women's Short $30</option>
              <option value="Women's Long">Women's Long $35</option>
              <option value="Blow Out">Blow Out $25</option>
              <option value="Kids">Kids $20</option>
            </select>
          </div>
          <div>
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
          </div>
          <div>
            <select defaultvalue={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
              <option value="">Facial Wax</option>
              <option value="EyeBrows">EyeBrows $12</option>
              <option value="Lip">Lip $12</option>
            </select>
          </div>
        </form>
        <DateTimePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          value={newEvent.start}
          className="date-time-picker"
        />
        
        <button className="schedule-btn" style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Schedule
        </button>
      </div>
      <div>
          <AppointmentList 
            startTime={newEvent.start}
            appointmentType={newEvent.title}
            verifyAppointment={verifyAppointment.value}
          />
      </div>
      
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor={(newEvent) => { 
          const end = moment(newEvent.start).add(1, 'h')
          return end._d
         }}
        style={{ height: 500, margin: "50px" }}
        defaultView="week"
        className="calendar"
      />
    </div>
  )
}

export default MyCalendar;