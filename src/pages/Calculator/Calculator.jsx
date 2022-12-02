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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quas voluptas sequi quasi facere delectus architecto consequuntur nisi deserunt! Delectus dolorem, doloremque aliquid sequi ratione expedita natus. Corporis, cum! Dolorum dolore non odit quam natus atque minima assumenda tempora debitis iste nobis, error nostrum sequi facilis excepturi. Delectus illum excepturi exercitationem? Ea quae neque, maiores quaerat eligendi quibusdam ullam dolore, enim incidunt autem odit architecto beatae excepturi placeat! Eos voluptatibus vero repudiandae, sequi unde, provident esse, voluptates quos rerum dignissimos omnis impedit harum qui possimus id non dicta reprehenderit. Molestiae quia corporis officiis quos nisi saepe minus facere, iure maiores.</p>
            <DateShow date={testDate.value}/>
            <button onClick={() => {dispatch(incrementMonth())}}>increment date</button>
            <button onClick={() => {dispatch(decrementMonth())}}>decrement date</button>
        </Container>
    </CalculatorStyled>
}