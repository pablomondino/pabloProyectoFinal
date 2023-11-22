import {initializeApp} from "firebase/app"

import {getFirestore} from 'firebase/firestore'

 
/*
const firebaseConfig = {

    // Aca va el objeto que nos da Firebase:

    apiKey: "",

    authDomain: "",

    projectId: "",

    storageBucket: "",

    messagingSenderId: "",

    appId: ""

};
*/
const firebaseConfig = {
    apiKey: "AIzaSyAIqJyrWVjpGQUD8OYtHVEc7Vqs_GDCIj0",
    authDomain: "proyectopablomondino.firebaseapp.com",
    projectId: "proyectopablomondino",
    storageBucket: "proyectopablomondino.appspot.com",
    messagingSenderId: "425113545672",
    appId: "1:425113545672:web:e63cac5e755990c4daaefd"
  };
 

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);