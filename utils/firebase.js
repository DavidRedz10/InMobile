import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCA11QcB2vlW9I1AW5s79iW-h3dYgxs6p8",
  authDomain: "inmobile-84e1a.firebaseapp.com",
  databaseURL: "https://inmobile-84e1a-default-rtdb.firebaseio.com",
  projectId: "inmobile-84e1a",
  storageBucket: "inmobile-84e1a.appspot.com",
  messagingSenderId: "1072420474657",
  appId: "1:1072420474657:web:c031e0b50bdc1b5f22b860"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;