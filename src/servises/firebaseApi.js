import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDmYeiCfUIRPHNKHi4VQ3wjRih2yviUYT0",
    authDomain: "finance-system-7f541.firebaseapp.com",
    projectId: "finance-system-7f541",
    storageBucket: "finance-system-7f541.appspot.com",
    messagingSenderId: "406451994336",
    appId: "1:406451994336:web:0152cf8c5c66de37ad1a85",
    measurementId: "G-R3R0VWDZHM"
  };
  
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const singIn = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }
    catch(error){
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    };
}

export const singUp = async (email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }
    catch(error){
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    };
}