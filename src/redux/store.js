import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./reduser";
import { userDocIdSlice, userDocumentSlice, isLoadiogSlice } from "./slises";

export const stateStore = configureStore({
    reducer:{
        userInfo: userReduser,
        userDocId: userDocIdSlice.reducer,
        userDocument: userDocumentSlice.reducer,
        isLoadiog: isLoadiogSlice.reducer
    }
})

export const storeDispatch = stateStore.dispatch;