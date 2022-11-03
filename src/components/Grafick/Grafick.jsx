import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useDispatch } from 'react-redux';
import { setTime, incrementMonth, decrementMonth } from 'redux/slises';
import { useEffect } from 'react';
import { DateShow } from 'components/Date/Date';

export const Grafick = () => {
    const dispatch = useDispatch();
    const grafickDataRedux = useSelector(state => state.userDocument.grafickData);
    const grafickData = grafickDataRedux ? JSON.parse(grafickDataRedux) : {};
    
    const drawData = [];
    drawData.push({ideal: 0, name: "0"});
    grafickData.breakPoints.forEach((item, index) => {
        drawData.push({
            ideal: grafickData.monthRecomendedIncome * (index + 1),
            name: (index + 1).toString()
        });
    });
    ////////////////////debug//////////////////////
    const setupRedux = useSelector(state => state.userDocument.setup);
    const setup = grafickDataRedux ? JSON.parse(setupRedux) : {};
    const testDate = useSelector(state => state.dateTest);
    useEffect(() => {
        dispatch(setTime(setup.startDate));
    }, []);
    //////////////////////debug/////////////////////
    return(<>
        <DateShow date={testDate.value}/>
        <button onClick={() => {dispatch(incrementMonth())}}>increment date</button>
        <button onClick={() => {dispatch(decrementMonth())}}>decrement date</button>
        <LineChart width={1000} height={250} data={drawData}>
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="ideal" stroke="#8b8b8b" dot={false} />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
    </>
    )
}