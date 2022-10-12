import { AsideStyled } from "./AsideStyled"
import { useEffect } from "react"

export const Aside = () => {


    useEffect(() => {
        const currensyUpdate = () => {
            console.log("currensyUpdate");
        }
        const localDate = {
            updateDate: Date.now(),
        }
        let currencyInfo = window.localStorage.getItem("currencyInfo");
        if(!currencyInfo){
            window.localStorage.setItem("currencyInfo", JSON.stringify(localDate));
            currensyUpdate();
            return;
        }
        currencyInfo = JSON.parse(currencyInfo);
        const storageDate = new Date(currencyInfo.updateDate);
        const nowDate = new Date(localDate.updateDate);
        if(storageDate.getDate() !== nowDate.getDate() || storageDate.getMonth() !== nowDate.getMonth() || storageDate.getFullYear() !== nowDate.getFullYear()){
            window.localStorage.setItem("currencyInfo", JSON.stringify(localDate));
            currensyUpdate();
        }
    }, []);

    return <AsideStyled>
        this is aside
    </AsideStyled>
}