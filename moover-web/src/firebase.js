import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyAKZk_QBCfyzAVvGEcntJXk-cUAweqBvss",
    authDomain: "moover-cd37a.firebaseapp.com",
    projectId: "moover-cd37a",
    storageBucket: "moover-cd37a.appspot.com",
    messagingSenderId: "310698199290",
    appId: "1:310698199290:web:ef0f29dd9d2a6a65982143"
};

firebase.initializeApp( firebaseConfig );

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();