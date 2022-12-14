import { AsideStyled } from "./AsideStyled"
import { useEffect, useState } from "react"
import { currensyUpdate, transformCurrency, suportedCodes } from "servises/currenciApi";

export const Aside = () => {
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
        let currencyInfo = window.localStorage.getItem("currencyInfo");
        if(!currencyInfo){
            currensyUpdate()
            .then(data => {
                setCurrency(Object.values(data));
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
                setCurrency(Object.values(data));
            })
            .catch(err => {
                console.log(err);
            })
        }
        else{
            setCurrency(Object.values(currencyInfo.data));
        }
    }, []);

    return <AsideStyled>
        <div class="box">
            <h2>Курси валют</h2>
            <ul>
                {currency.filter(({code}) => suportedCodes(code) )
                .map(({code, value}) => <li key={code}>
                    <p className="key">{code}</p>
                    <p className="value">{transformCurrency(value)}</p>
                </li>)}
            </ul>
        </div>
    </AsideStyled>
}