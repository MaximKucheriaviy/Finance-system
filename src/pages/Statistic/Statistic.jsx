import { Container } from "components/Container/Container";
import { StatisticStyled } from "./StatisicStyled";
import { Grafick } from "components/Grafick/Grafick";
import { UserInfo } from "components/UserInfo/UsirInfo";
import { DateShow } from "components/Date/Date";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementMonth, decrementMonth } from "redux/slises";
import { reset } from 'servises/firebaseApi';

export const Statistic = () => {
    const virtualDate = useSelector(state => state.dateTest.value)
    const docId = useSelector(state => state.userDocId.value);
    const dispatch = useDispatch();
    return <StatisticStyled>
        <Container>
            <h2>Статистика</h2>
            <DateShow date={virtualDate} />
            <div className="timeButtonContainer">
                <button className="timeButton" onClick={() => {dispatch(decrementMonth())}}>Попередній місяць</button>
                <button className="timeButton" onClick={() => {dispatch(incrementMonth())}}>Наступний місяць</button>
            </div>
            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quas voluptas sequi quasi facere delectus architecto consequuntur nisi deserunt! Delectus dolorem, doloremque aliquid sequi ratione expedita natus. Corporis, cum! Dolorum dolore non odit quam natus atque minima assumenda tempora debitis iste nobis, error nostrum sequi facilis excepturi. Delectus illum excepturi exercitationem? Ea quae neque, maiores quaerat eligendi quibusdam ullam dolore, enim incidunt autem odit architecto beatae excepturi placeat! Eos voluptatibus vero repudiandae, sequi unde, provident esse, voluptates quos rerum dignissimos omnis impedit harum qui possimus id non dicta reprehenderit. Molestiae quia corporis officiis quos nisi saepe minus facere, iure maiores.</p>
            <Grafick/>
            <UserInfo/>
            <button className="resetButton" onClick={() => {reset(docId)}}>Очистити графік</button>
        </Container>
    </StatisticStyled>
}