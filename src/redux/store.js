import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./reduser";
export const stateStore = configureStore({
    reducer:{
        userInfo: userReduser
    }
})