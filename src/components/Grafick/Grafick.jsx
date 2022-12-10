import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useDispatch } from 'react-redux';
import { setTime } from 'redux/slises';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { reset } from 'servises/firebaseApi';

export const Grafick = () => {
    
    const dispatch = useDispatch();
    const docId = useSelector(state => state.userDocId.value);

    const grafickDataRedux = useSelector(state => state.userDocument.grafickData);
    const grafickData = grafickDataRedux ? JSON.parse(grafickDataRedux) : {};

    const setupRedux = useSelector(state => state.userDocument.setup);
    const setup = grafickDataRedux ? JSON.parse(setupRedux) : {};

    const usageRedux = useSelector(state => state.userDocument.usage);
    const usage = grafickDataRedux ? JSON.parse(usageRedux) : [];
    
    
    const drawData = [];
    drawData.push({ideal: 0, name: "0", factical: 0});

    if(grafickData.breakPoints){
        grafickData.breakPoints.forEach((item, index) => {
            drawData.push({
                ideal: grafickData.monthRecomendedIncome * (index + 1),
                name: (index + 1).toString()
            });
        });
    }

    ////////////////////debug//////////////////////
    
    const testDate = useSelector(state => state.dateTest);
    useEffect(() => {
        if(testDate.value > 0){
            return
        }
        dispatch(setTime(setup.startDate));
    }, [dispatch, setup.startDate, testDate.value]);
    ///////////////////debug/////////////////////


    for(let i = 1; i <= checkCountOfMonth(setup.startDate, testDate.value); i++){
        drawData[i].factical = grafickData.monthTotalIncome * i;
        usage.forEach(item => {
            if(grafickData.breakPoints[i - 1].data > item.operationDate){
                if(item.operationType === "outcome"){
                    drawData[i].factical -= item.operationsValue;
                }
                else if(item.operationType === "income"){
                    drawData[i].factical += item.operationsValue;
                }
            }
        })
    }

    

    return(<>
        {!grafickData.breakPoints && <Navigate to="/"/>}
        <LineChart width={1000} height={250} data={drawData}>
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="ideal" stroke="#8b8b8b" dot={false} />
            <Line type="monotone" dataKey="factical" stroke="#005724" dot={false} />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
        <button onClick={() => reset(docId)}>reset</button>
    </>
    )
}


function checkCountOfMonth(start, now){
    const date = new Date(now - start);
    const template = new Date(0);
    const countOfMonth = (Math.floor((date.getFullYear() - template.getFullYear()) * 12) + date.getMonth());
    return countOfMonth;
}