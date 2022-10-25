import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { doc, updateDoc, getFirestore, collection, addDoc, getDoc } from "firebase/firestore"; 
import { storeDispatch } from "redux/store";
import { setUserDocId, setDocument, updateDocument } from "redux/slises";



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
const db = getFirestore(app);
const collectionName = "financse-system"
const userDock = doc(db, collectionName, "6cLJFDAB2mISIdeYoYQd");

export const getUserDocumentData = async (docId, field) => {
    console.log(docId);
    const docRef = doc(db, collectionName, docId);
    const data =  await getDoc(docRef);
    return data.data()[field];
}

export const getAllUserDocumentData = async (docId) => {
    console.log(docId);
    const docRef = doc(db, collectionName, docId);
    const data = await getDoc(docRef);
    return data.data();
}

export const setUserDocumentData = async (docId, field, data) => {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
        [field]: data
    });
    storeDispatch(updateDocument({
        [field]: data
    }));
}

export const singIn = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userDocData = await getDoc(userDock);
        const docId = userDocData.data()[userCredential.user.uid];
        const document = await getAllUserDocumentData(docId);
        storeDispatch(setDocument(document));
        storeDispatch(setUserDocId(docId));       
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
        const docRef = await addDoc(collection(db, collectionName), {
            start: JSON.stringify({value: false}),
        })
        const document = await getAllUserDocumentData(docRef.id);
        await updateDoc(userDock, {
            [userCredential.user.uid]: docRef.id
        })
        storeDispatch(setUserDocId(docRef.id));
        storeDispatch(setDocument(document));
        return userCredential.user;
    }
    catch(error){
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    };
}

