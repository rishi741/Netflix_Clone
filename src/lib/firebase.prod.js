import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';
// we need to somehow seed the database
require('dotenv').config(); 
//we need a config here
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "netflix-clone-99450.firebaseapp.com",
    projectId: "netflix-clone-99450",
    storageBucket: "netflix-clone-99450.appspot.com",
    messagingSenderId: "622931429135",
    appId: "1:622931429135:web:4eac729b9723213e42a07a"
};

const firebase = Firebase.initializeApp(config);

export {firebase};
