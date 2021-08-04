import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  //OBJETO DE FIREBASE
    apiKey: "AIzaSyD7tebsxPZMbU3wS3Bu9XRXnhOHtkbVc5A",
    authDomain: "proyecto-react-7e2dd.firebaseapp.com",
    projectId: "proyecto-react-7e2dd",
    storageBucket: "proyecto-react-7e2dd.appspot.com",
    messagingSenderId: "675619527460",
    appId: "1:675619527460:web:bc6637cbdd2fe93533f1b1"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export const database = firebase.firestore();