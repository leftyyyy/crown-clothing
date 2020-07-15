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
//async because we're making an API request (an async operation)
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
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