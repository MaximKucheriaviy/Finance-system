import { createSlice } from "@reduxjs/toolkit";

const initialUserDocId = () => {
    const storadUserData = window.sessionStorage.getItem("userDocId");
    if(!storadUserData){
        return {value: ""};
    }
    return JSON.parse(storadUserData);
}

const initialStorageCheckUseDoc = () => {
    const storadUserData = window.sessionStorage.getItem("userDocument");
    if(!storadUserData){
        return {
            start: {value: ""},
        };
    }
    return JSON.parse(storadUserData);
}

export const userDocIdSlice = createSlice({
    name: "userDocId",
    initialState: initialUserDocId(),
    reducers: {
        setUserDocId: (state, action) => {
            window.sessionStorage.setItem("userDocId", JSON.stringify({value:action.payload}));
            state.value = action.payload;
        },
        clearUserDocID: (state, action) => {
            window.sessionStorage.removeItem("userDocId");
            return initialUserDocId();
        }
    }
})

export const userDocumentSlice = createSlice({
    name: "userDocument",
    initialState: initialStorageCheckUseDoc(),
    reducers: {
        setDocument: (_, action) => {
            window.sessionStorage.setItem("userDocument", JSON.stringify(action.payload));
            return action.payload;
        },
        updateDocument: (state, action) => {
            const names = Object.keys(action.payload);
            names.forEach(item => {
                state[item] = action.payload[item];
            });
            window.sessionStorage.setItem("userDocument", JSON.stringify(state));
        },
        clearDocument: (state, action) => {
            window.sessionStorage.removeItem("userDocument");
            return initialStorageCheckUseDoc();
        }
    }
})



export const {setUserDocId, clearUserDocID} = userDocIdSlice.actions;
export const {setDocument, updateDocument, clearDocument} = userDocumentSlice.actions;