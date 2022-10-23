import { useState } from "react"
//import { setUserDocumentData } from "servises/firebaseApi";

export const MainForm = () => {
    const [autoUsage, setAutoUsage] = useState("");

    const radioHandler = (event) => {
        const value = event.target.value;
        setAutoUsage(value);
    }

    const submitHendler = (event) => {
        event.preventDefault();
        // const monthIncome = event.target.salaty;
        // const monthOutcome = monthIncome / 2;
        const date = event.target.date.value;
        console.log(date);
    }
    return <form onSubmit={submitHendler}>
        <h2>Головна форма</h2> 
        <label htmlFor="salary">Введіть ваш щомісячний заробіток</label>
        <input type="number" name="salaty" id="salary"/>
        <p>Автовитрати</p>
        <label htmlFor="">
            Так
            <input type="radio" onInput={radioHandler} name="usage" value="Yes"/>
        </label>
        <label htmlFor="">
            Ні
            <input type="radio" onInput={radioHandler} name="usage" value="No"/>
        </label>
        {autoUsage && autoUsage !== "Yes" && <>
            <label htmlFor="usageValue">Витрати</label>
            <input type="text" id="usageValue"/>
        </>}
        <label htmlFor="time">Термін</label>
        <input type="date" name="date" id="time"/>
        <p>Валюта</p>
        <button type="submit">OK</button>
    </form>
}