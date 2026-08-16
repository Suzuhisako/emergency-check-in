// db.js - Offline Emergency Check-In Database
const DB_NAME = 'EmergencyCheckInDB';
const DB_VERSION = 1;
const STORE_NAME = 'checkins';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        store.createIndex('synced', 'synced', { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// 1. Save check-in locally (Flagged as unsynced)
export async function saveCheckInLocally(checkInData) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const record = {
      ...checkInData,
      timestamp: Date.now(),
      synced: false
    };
    
    const request = store.add(record);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// 2. Retrieve all pending check-ins waiting to be sent online
export function getPendingCheckIns() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('EmergencyCheckInDB', 1);

    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction('checkins', 'readonly');
      const store = tx.objectStore('checkins');

      // Fetch directly from store without IDBIndex
      const getAllReq = store.getAll();

      getAllReq.onsuccess = () => {
        // Filter unsynced items using pure JS
        const pending = getAllReq.result.filter(item => !item.synced);
        resolve(pending);
      };

      getAllReq.onerror = () => reject(getAllReq.error);
    };

    request.onerror = () => reject(request.error);
  });
}

// 3. Mark a check-in as synced after successful network response
export async function markCheckInSynced(id) {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  const request = store.get(id);
  request.onsuccess = () => {
    const record = request.result;
    if (record) {
      record.synced = true;
      store.put(record);
    }
  };
}
