import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserDocumentData } from "servises/firebaseApi";

export const getDocument = createAsyncThunk("document/fetchAll", async () => {
    const data = getAllUserDocumentData();
    return data;
})