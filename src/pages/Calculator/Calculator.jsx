import { Container } from "components/Container/Container";
import { CalculatorStyled } from "./CalculatorStyled";
import { DateShow } from "components/Date/Date";
import { useDispatch, useSelector } from "react-redux";
import { incrementMonth, decrementMonth } from "redux/slises";
import { StyledForm } from "components/MainForm/MainFormStyled";
import { InputBox } from "components/InputBox/InputBox";
import { nanoid } from "nanoid";
import { useState } from "react";
import { calculeateWeek, calculeateMonth } from "servises/presentsCalc";

export const Calculator = () => {
    const depoisteID = nanoid();
    const presentsID = nanoid();
    const selectorID = nanoid();
    const dispatch = useDispatch();
    const testDate = useSelector(state => state.dateTest);

    const [deposite, setDeposite] = useState(0);
    const [presnts, setPresents] = useState(0);
    const [week, setWeek] = useState({});

    const chageHendler = (event) => {
        switch (event.target.name){
            case "deposite":
                setDeposite(event.target.valueAsNumber);
            break;
            case "presents":
                setPresents(event.target.valueAsNumber);
            break;
            default:
                return;
        }
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const termin = event.target.select.value;
        if(termin === "1week" || termin === "2weeks" || termin === "3weeks"){
            console.log(calculeateWeek(deposite, presnts, termin)); 
        }
        else{
            calculeateMonth(deposite, presnts, termin);
        }
    }


    return <CalculatorStyled>
        <Container>
            <h2>Калькулятор</h2>
<<<<<<< Updated upstream
            <p>На цій сторінці ми можемо запропонувати вам інструменти для планування ваших депозитів, а також конвертер валют</p>
=======
            <StyledForm onSubmit={submitHandler}>
                <h2>Калькулятор складних відсотків</h2>
                <InputBox>
                    <label htmlFor={depoisteID}>Депозит</label>
                    <input 
                        type="number"
                        id={depoisteID}
                        value={deposite}
                        name="deposite"
                        onChange={chageHendler}
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor={presentsID}>Відсотки</label>
                    <input 
                        type="number"
                        id={presentsID}
                        value={presnts}
                        name="presents"
                        onChange={chageHendler}
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor={selectorID}>Строк</label>
                    <select name="select" id={selectorID} defaultValue="1month"> 
                        <option value="1week" >1 тиждень</option>
                        <option value="2weeks" >2 тижні</option>
                        <option value="3weeks" >3 тижні</option>
                        <option value="1month" >1 місяць</option>
                        <option value="3monthes" >3 місяці</option>
                        <option value="6monthes" >6 місяців</option>
                        <option value="9monthes" >9 місяців</option>
                        <option value="1year" >1 рік</option>
                    </select>
                </InputBox>
                <button type="submit">Розрахувати</button>
            </StyledForm>


            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quas voluptas sequi quasi facere delectus architecto consequuntur nisi deserunt! Delectus dolorem, doloremque aliquid sequi ratione expedita natus. Corporis, cum! Dolorum dolore non odit quam natus atque minima assumenda tempora debitis iste nobis, error nostrum sequi facilis excepturi. Delectus illum excepturi exercitationem? Ea quae neque, maiores quaerat eligendi quibusdam ullam dolore, enim incidunt autem odit architecto beatae excepturi placeat! Eos voluptatibus vero repudiandae, sequi unde, provident esse, voluptates quos rerum dignissimos omnis impedit harum qui possimus id non dicta reprehenderit. Molestiae quia corporis officiis quos nisi saepe minus facere, iure maiores.</p>
>>>>>>> Stashed changes
            <DateShow date={testDate.value}/>
            <button onClick={() => {dispatch(incrementMonth())}}>increment date</button>
            <button onClick={() => {dispatch(decrementMonth())}}>decrement date</button>
        </Container>
    </CalculatorStyled>
}