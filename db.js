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
export async function getPendingCheckIns() {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const index = store.index('synced');
    const request = index.getAll(false); // Fetch items where synced === false

    request.onsuccess = () => resolve(request.result || []);
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
