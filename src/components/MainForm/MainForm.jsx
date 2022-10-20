import { useState } from "react"

export const MainForm = () => {
    const [autoUsage, setAutoUsage] = useState("");

    const radioHandler = (event) => {
        const value = event.target.value;
        setAutoUsage(value);
    }

    return <form>
        <h2>Головна форма</h2> 
        <label htmlFor="salary">Введіть ваш щомісячний заробіток</label>
        <input type="text" id="salary"/>
        <p>Автовитрати</p>
        <label htmlFor="">
            Так
            <input type="radio" onInput={radioHandler} name="usage" value="Yes"/>
        </label>
        <label htmlFor="">
            Ні
            <input type="radio" onInput={radioHandler} name="usage" value="No"/>
        </label>
        {autoUsage && autoUsage === "Yes" && <>
            <label htmlFor="usageValue">Витрати</label>
            <input type="text" id="usageValue"/>
        </>}
        <label htmlFor="time">Термін</label>
        <input type="text" id="time"/>
        <p>Валюта</p>
        <button type="submit">OK</button>
    </form>
}