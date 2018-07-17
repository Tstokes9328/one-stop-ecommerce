import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCdHprz7bjVsCFbUuVOUY_kIGpN3aHynOI",
    authDomain: "one-stop-3af88.firebaseapp.com",
    databaseURL: "https://one-stop-3af88.firebaseio.com",
    projectId: "one-stop-3af88",
    storageBucket: "one-stop-3af88.appspot.com",
    messagingSenderId: "715253205518"
  };
  const fire = firebase.initializeApp(config);
  export default fire;