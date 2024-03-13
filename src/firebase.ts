import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports


const firebaseConfig = {
    apiKey: 'AIzaSyBvjaJxBH8l95gMKxwc0RqSJPY0w__iHts',
    authDomain: 'wedding-invite-cec4e.firebaseapp.com',
    projectId: 'wedding-invite-cec4e',
    storageBucket: 'wedding-invite-cec4e.appspot.com',
    messagingSenderId: '831849487879',
    appId: '1:831849487879:web:8e5b4306d8583fe88254a2',
  }

export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')