import { AsideStyled } from "./AsideStyled"
import { useEffect, useState } from "react"
import { currensyUpdate } from "servises/currenciApi";

export const Aside = () => {
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
        let currencyInfo = window.localStorage.getItem("currencyInfo");
        if(!currencyInfo){
            currensyUpdate()
            .then(data => {
                setCurrency(data);
            })
            .catch(err => {
                console.log(err);
            })
            return;
        }
        currencyInfo = JSON.parse(currencyInfo);
        const storageDate = new Date(currencyInfo.updateDate);
        const nowDate = new Date(Date.now());
        if(storageDate.getDate() + 5 < nowDate.getDate() || storageDate.getMonth() !== nowDate.getMonth() || storageDate.getFullYear() !== nowDate.getFullYear()){
            currensyUpdate()
            .then(data => {
                setCurrency(data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        else{
            setCurrency(currencyInfo.data);
        }
    }, []);

    return <AsideStyled>
        this is aside
    </AsideStyled>
}