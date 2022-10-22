import { createReducer } from "@reduxjs/toolkit";
import { setUserInfo } from "./actions";

export const userReduser = createReducer({}, {
    [setUserInfo]: (state, action) => action.payload
})