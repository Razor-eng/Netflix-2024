import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyABIT7BkvkJWLMUo9xJH1148Afj1mkfM7I",
    authDomain: "netflix-65c00.firebaseapp.com",
    projectId: "netflix-65c00",
    storageBucket: "netflix-65c00.appspot.com",
    messagingSenderId: "328348647335",
    appId: "1:328348647335:web:4101519000580f287f8082"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };