import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVDYBeBo-K0_Obp-5b9vpSKwzELH6Po9A",
    authDomain: "tinder-clone-f43da.firebaseapp.com",
    databaseURL: "https://tinder-clone-f43da.firebaseio.com",
    projectId: "tinder-clone-f43da",
    storageBucket: "tinder-clone-f43da.appspot.com",
    messagingSenderId: "601897474524",
    appId: "1:601897474524:web:0410c7f21355a995781719",
    measurementId: "G-WV74QKSB42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;