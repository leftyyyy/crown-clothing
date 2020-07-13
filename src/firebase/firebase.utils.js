import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUv4l5ui-1TEfCEhw2IaAmS7GKgeyY9fY",
    authDomain: "crown-database-1891989.firebaseapp.com",
    databaseURL: "https://crown-database-1891989.firebaseio.com",
    projectId: "crown-database-1891989",
    storageBucket: "crown-database-1891989.appspot.com",
    messagingSenderId: "12950208505",
    appId: "1:12950208505:web:377e92912920528f344728",
    measurementId: "G-1TC9QT78RK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
//prompt -- select_account - always trigger google popup whenever we use google auth method
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;