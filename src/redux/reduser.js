import { createReducer } from "@reduxjs/toolkit";
import { setUserInfo } from "./actions";


const storageCheck = () => {
    const storadUserData = window.sessionStorage.getItem("userInfo");
    if(!storadUserData){
        return {};
    }
    return JSON.parse(storadUserData);
}


export const userReduser = createReducer(storageCheck(), {
    [setUserInfo]: (state, action) => {
        window.sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
        return action.payload;
    }
})