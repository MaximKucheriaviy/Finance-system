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
            <p className="text">На цій сторінці ви зможете відслиткувати прогресс свої накопичень!</p>
            <Grafick/>
            <UserInfo/>
            {/* <button className="resetButton" onClick={() => {reset(docId)}}>Очистити графік</button> */}
        </Container>
    </StatisticStyled>
}