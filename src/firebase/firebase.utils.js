import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDW_CfhzD59OKUmUR0N0ms1PMQWcHCslcQ",
    authDomain: "crown-eshop-db.firebaseapp.com",
    projectId: "crown-eshop-db",
    storageBucket: "crown-eshop-db.appspot.com",
    messagingSenderId: "603499400029",
    appId: "1:603499400029:web:be1dec817cfef1896436b4",
    measurementId: "G-QWRHXYLZXY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore  = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;