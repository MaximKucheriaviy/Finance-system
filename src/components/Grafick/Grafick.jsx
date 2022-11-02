import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines} from 'react-vis';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Grafick = () => {
    const grafickDataRedux = useSelector(state => state.userDocument.grafickData);
    const grafickData = grafickDataRedux ? JSON.parse(grafickDataRedux) : {};
    const verticalTickValue = [];
    grafickData.breakPoints.forEach((item, index) => {
        verticalTickValue.push(grafickData.monthRecomendedIncome * (index + 1));
    });
    console.log(verticalTickValue);
    return(
        <XYPlot
            width={1000}
            height={300}
            fill = "green">
            <HorizontalGridLines tickValues={verticalTickValue} tickTotal ={verticalTickValue.length}/>
            <VerticalGridLines />
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