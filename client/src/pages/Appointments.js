import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        title: "Birthday",
        start: new Date(2021, 11, 15),
        end: new Date(2021, 11, 19)
    }
];

function MyCalendar() {
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    // const [allEvents, setAllEvents] = useState(myEventsList)

    // function handleAddEvent() {
    //     setAllEvents([...allEvents, newEvent])
    // }

    return (
    <div>
        <h1>Calendar</h1>
        <h2>Add New Event</h2>
        <div>
            <input type='text' placeholder='add title' style={{width: 
            '20%', marginRight: "10px"}} value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>
        </div>
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
        />
    </div>
    )
}

// const MyCalendar = props => (
//     const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
//     <div>
//         <Calendar
//             localizer={localizer}
//             events={myEventsList}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 500, margin: "50px" }}
//         />
//     </div>
// )

export default MyCalendar;