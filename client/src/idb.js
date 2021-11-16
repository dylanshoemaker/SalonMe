let db;

const request = window.indexedDB.open('SalonMe', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_transaction', { autoIncrement: true })
}

request.onsuccess = function(event) {
    db = event.target.results;

    if (navigator.onLine) {
        uploadTransaction();
    }
}

request.onerror = function(event) {
    console.log(event.target.errorCode);
}

function saveRecord(record) {
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    const productObjectStore = transaction.objectStore('new_transaction');

    productObjectStore.add(record);
}

function uploadTransaction() {
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    const productObjectStore = transaction.objectStore('new_transaction');

    const getAll = productObjectStore.getAll()

    getAll.onsuccess = function() {

    }
}