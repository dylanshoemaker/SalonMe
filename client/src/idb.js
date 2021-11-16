let db;

const request = indexedDB.open('salonme', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_appointment', { autoIncrement: true })
};

request.onsuccess = function(event) {
    db = event.target.results;

    if (navigator.onLine) {
        //uploadAppointment();
    }
};