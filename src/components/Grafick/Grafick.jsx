import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const Grafick = () => {
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
    
    return(
        <LineChart width={1000} height={250} data={drawData}>
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="ideal" stroke="#8b8b8b" dot={false} />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
    )
}