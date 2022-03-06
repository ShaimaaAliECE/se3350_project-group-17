import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCVdSRzbxhSEeVE-rqZeh5fPGMrqnFgqL4",
    authDomain: "saeg-a9ea9.firebaseapp.com",
    projectId: "saeg-a9ea9",
    storageBucket: "saeg-a9ea9.appspot.com",
    messagingSenderId: "904931073562",
    appId: "1:904931073562:web:b3bbfc8edae1dcf5f03ba3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);
export {app as default, auth, database};