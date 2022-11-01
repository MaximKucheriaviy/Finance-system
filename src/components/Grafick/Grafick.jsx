import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import { getSavedCash, monthCount } from 'servises/calculation';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export const Grafick = () => {
    const setupRedux = useSelector(state => state.userDocument.setup);
    const [setup, setSetup] = useState({});
    useEffect(() => {
        setSetup(setupRedux ? JSON.parse(setupRedux) : {});
    }, [setupRedux])
    console.log(getSavedCash(setup.income, setup.outcome));
    return(
        <XYPlot
            width={300}
            height={300}>
            <HorizontalGridLines />
            <LineSeries
                data={[
                {x: 1, y: 10},
                {x: 2, y: 5},
                {x: 3, y: 15}
                ]}/>
            <XAxis />
            <YAxis />
        </XYPlot>
    )
}