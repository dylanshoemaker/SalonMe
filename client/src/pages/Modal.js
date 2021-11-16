import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import "react-datetime-picker/dist/DateTimePicker.css";

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

function Modal() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(myEventsList)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <input type="text" placeholder="add title" style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DateTimePicker
                    placeholderText="Start Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                    value={newEvent.start}
                />
                <DateTimePicker
                    placeholderText="End Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                    value={newEvent.end}
                />
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
        </div>
    );
};

export default Modal;