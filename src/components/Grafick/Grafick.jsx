// import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import { grafickCalcolation } from 'servises/calculation';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Grafick = () => {
    const setupRedux = useSelector(state => state.userDocument.setup);
    const [setup] = useState(JSON.parse(setupRedux) || {});
    grafickCalcolation(setup);
    return(<></>
        // <XYPlot
        //     width={300}
        //     height={300}>
        //     <HorizontalGridLines />
        //     <LineSeries
        //         data={[
        //         {x: 1, y: 10},
        //         {x: 2, y: 5},
        //         {x: 3, y: 15}
        //         ]}/>
        //     <XAxis />
        //     <YAxis />
        // </XYPlot>
    )
}