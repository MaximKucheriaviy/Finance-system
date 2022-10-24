import { useState } from "react"
import { InputBox, RadioButton, RadioContainer } from "components/InputBox/InputBox";
import { StyledForm } from "./MainFormStyled";
import { nanoid } from "nanoid";
//import { setUserDocumentData } from "servises/firebaseApi";

export const MainForm = () => {
    const checboxYesID = nanoid();
    const checboxNoID = nanoid();
    const sallaryID = nanoid();
    const outComeID = nanoid();
    const [autoUsage, setAutoUsage] = useState("Yes");

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
    return <StyledForm onSubmit={submitHendler}>
        <h2>Головна форма</h2> 
        <InputBox>
            <label htmlFor={sallaryID}>Введіть ваш щомісячний заробіток</label>
            <input type="number" name="salaty" id={sallaryID}/>
        </InputBox>
        <RadioContainer>
            <p className="checkboxContainerLabel">Автовитрати</p>
            <div className="thumb">
                <RadioButton>
                    <label htmlFor={checboxYesID}>Так</label>
                    <input 
                        type="radio" 
                        onClick={radioHandler} 
                        name="usage" 
                        value="Yes" 
                        checked={autoUsage === "Yes"}
                        id={checboxYesID}
                    /> 
                </RadioButton>
                <RadioButton>
                    <label htmlFor={checboxNoID}>Ні</label>
                    <input 
                        type="radio" 
                        onClick={radioHandler} 
                        name="usage" 
                        value="No" 
                        checked={autoUsage === "No"}
                        id={checboxNoID}
                    /> 
                </RadioButton>
            </div>
        </RadioContainer>
        {autoUsage && autoUsage !== "Yes" && <InputBox>
            <label htmlFor={outComeID}>Витрати</label>
            <input type="number" name="usage" id={outComeID}/>
        </InputBox>}
        <InputBox>
            <label htmlFor="time">Термін</label>
            <input type="date" name="date" id="time"/>
        </InputBox>
        <button type="submit">OK</button>
    </StyledForm>
}