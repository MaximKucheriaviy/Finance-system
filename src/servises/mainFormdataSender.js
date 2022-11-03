import { setUserDocumentData } from "servises/firebaseApi";
import { stateStore } from "redux/store";
import { grafickCalcolation } from "./calculation";


export const sendData = (income, outcome, target, date) => {
    const docId = stateStore.getState().userDocId.value;
    console.log(income, outcome, target, date);
    if(!income || !outcome || (!target && !date)){
        console.log("Form not complited");
        return;
    }
    let type = "total";
    if(!target && date){
        type = "time"
    }
    else if(target && !date){
        type = "sum"
    }

    const data = {
        income,
        outcome,
        target,
        date,
        type,
        startDate: Date.now()
    }

    const grafickData = grafickCalcolation(data);


    setUserDocumentData(docId, "start", JSON.stringify({value: true}));
    setUserDocumentData(docId, "setup", JSON.stringify(data));
    setUserDocumentData(docId, "grafickData", JSON.stringify(grafickData));
    setUserDocumentData(docId, "usage", JSON.stringify([]));
}