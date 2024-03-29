import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DateTimePicker from 'react-datetime-picker';
import "react-datetime-picker/dist/DateTimePicker.css";
import { ADD_APPOINTMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
// import { QUERY_APPOINTMENTS } from "../utils/queries";


const localizer = momentLocalizer(moment);

const myEventsList = [
    {
        title: "Haircut",
        start: new Date(2021, 10, 15, 9, 0, 0),
        end: new Date(2021, 10, 15, 9, 0, 0)
        //user_id: user_id
    }
];

const MyCalendar = () => {
  const [newEvent, setNewEvent] = useState([{title: "", start: "", end: "" }]);
  const [allEvents, setAllEvents] = useState(myEventsList)

  const [createAppointment, { error }] = useMutation(ADD_APPOINTMENT);

//   const handleChange = event => {
//     console.log("this is the event");
//     console.log(event.title);
//     console.log("this is the event");
//     if (event.title) {
//       setNewEvent("");
//     }
// }

  const handleAddEvent = async event => {
    event.preventDefault();

    console.log(event);
   
      try{
        await createAppointment({
        variables: { 
          title: newEvent.title,
          startTime: newEvent.start,
        }
      });
      
      } catch (e) {
        console.log(e);
      }
      setAllEvents([...allEvents, newEvent])
       
    }  



    return (
      <div >
        <h2 className="appointment-scheduler">Add appointment to our database</h2>
        <div className="appointment-scheduler">
          
          <form action="/action_page.php">
            <label htmlFor="salon">Choose a service:</label>
            <div>
              <select defaultValue={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
                <option value="">Cuts</option>
                <option value="Men's">Men's $20</option>
                <option value="Women's Short">Women's Short $30</option>
                <option value="Women's Long">Women's Long $35</option>
                <option value="Blow Out">Blow Out $25</option>
                <option value="Kids">Kids $20</option>
              </select>
            </div>
            <div>
              <select defaultValue={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
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
              <select defaultValue={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
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
          <p>{error && <span className="ml-2">Please log in or create an account</span>}</p>
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
          startTime={newEvent.start}
          appointmentType={newEvent.title}
          
        />
      </div>
    )
  }
  
  export default MyCalendar;
  