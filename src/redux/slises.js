import { createSlice } from "@reduxjs/toolkit";

export const userDocIdSlice = createSlice({
    name: "userDocId",
    initialState: {value: ""},
    reducers: {
        setUserDocId: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {setUserDocId} = userDocIdSlice.actions;