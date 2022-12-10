import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./reduser";
import { userDocIdSlice, userDocumentSlice, isLoadiogSlice, dateTest, currentMonthIncomeSlice } from "./slises";

export const stateStore = configureStore({
    reducer:{
        userInfo: userReduser,
        userDocId: userDocIdSlice.reducer,
        userDocument: userDocumentSlice.reducer,
        isLoadiog: isLoadiogSlice.reducer,
        dateTest: dateTest.reducer,
        currentMonthIncome: currentMonthIncomeSlice.reducer
    }
})

export const storeDispatch = stateStore.dispatch;