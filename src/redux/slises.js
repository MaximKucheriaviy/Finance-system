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
            start: JSON.stringify({value: ""}),
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

export const isLoadiogSlice = createSlice({
    name: "isLoading",
    initialState: {value: false},
    reducers:{
        showLoader: () => {
            return {value: true};
        },
        hideLoader: () => {
            return {value: false};
        }
    }
})

export const dateTest = createSlice({
    name: "dateTest",
    initialState: {value: 0},
    reducers: {
        incrementMonth: (state, action) => {
            const monthOne = new Date(0);
            monthOne.setMonth(monthOne.getMonth() + 1);
            state.value += monthOne.getTime();           
        },
        decrementMonth: (state, action) => {
            const monthOne = new Date(0);
            monthOne.setMonth(monthOne.getMonth() + 1);
            state.value -= monthOne.getTime();           
        },
        setTime: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const currentMonthIncomeSlice = createSlice({
    name: "currentMonthIncome",
    initialState: {value: 0},
    reducers: {
        setCurrentMonthIncome(state, action){
            state.value = action.payload;
        }
    }
}) 



export const {setUserDocId, clearUserDocID} = userDocIdSlice.actions;
export const {setDocument, updateDocument, clearDocument} = userDocumentSlice.actions;
export const {showLoader, hideLoader} = isLoadiogSlice.actions;
export const {incrementMonth, decrementMonth, setTime} = dateTest.actions;
export const {setCurrentMonthIncome} = currentMonthIncomeSlice.actions;