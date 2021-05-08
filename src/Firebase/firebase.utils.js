import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAwSNbjKdqm1QqYhJwy4K6ulKVOOvg8ErE",
    authDomain: "passyourreacttest.firebaseapp.com",
    projectId: "passyourreacttest",
    storageBucket: "passyourreacttest.appspot.com",
    messagingSenderId: "778553966090",
    appId: "1:778553966090:web:d19515aee28d3f07e1e9f3",
    measurementId: "G-5GG9D233DH"
  };


  firebase.initializeApp(firebaseConfig);

  export const createUserProfil = async (userAuth , additionData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShop = await userRef.get();
    if(!snapShop.exists)
    {
        const {displayName , email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionData
            })
        }catch(error){
            console.error(error.message);
        }
    }
    return userRef;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  export default firebase;