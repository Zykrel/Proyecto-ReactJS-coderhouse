
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBpZ2O4B6Cb-8rqTi7kDKR0NsPBozz_slA",
    authDomain: "proyecto-react-coderhous-71488.firebaseapp.com",
    projectId: "proyecto-react-coderhous-71488",
    storageBucket: "proyecto-react-coderhous-71488.appspot.com",
    messagingSenderId: "562051060931",
    appId: "1:562051060931:web:de23416b2bfc0ece503e76"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)