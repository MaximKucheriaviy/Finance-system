import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./reduser";
import { userDocIdSlice } from "./slises";

export const stateStore = configureStore({
    reducer:{
        userInfo: userReduser,
        userDocId: userDocIdSlice.reducer
    }
})

export const storeDispatch = stateStore.dispatch;