import { Container } from "components/Container/Container";
import { CalculatorStyled } from "./CalculatorStyled";
import { DateShow } from "components/Date/Date";
import { useDispatch, useSelector } from "react-redux";
import { incrementMonth, decrementMonth } from "redux/slises";

export const Calculator = () => {
    const dispatch = useDispatch();
    const testDate = useSelector(state => state.dateTest);
    return <CalculatorStyled>
        <Container>
            <h2>Калькулятор</h2>
            <p>На цій сторінці ми можемо запропонувати вам інструменти для планування ваших депозитів, а також конвертер валют</p>
            <DateShow date={testDate.value}/>
            <button onClick={() => {dispatch(incrementMonth())}}>increment date</button>
            <button onClick={() => {dispatch(decrementMonth())}}>decrement date</button>
        </Container>
    </CalculatorStyled>
}