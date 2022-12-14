import { useSelector } from "react-redux"
import { UserInfoStyled } from "./UserInfoStyled";

export const UserInfo = () => {
    const grafickDataRedux = useSelector(state => state.userDocument.grafickData);
    const grafickData = grafickDataRedux ? JSON.parse(grafickDataRedux) : {};

    const usageRedux = useSelector(state => state.userDocument.usage);
    const usage = grafickDataRedux ? JSON.parse(usageRedux) : [];

    let currentIncome = grafickData.monthTotalIncome;

    const testDate = useSelector(state => state.dateTest);
    usage.forEach(item => {
        const month = new Date(0);
        month.setMonth(1);
        if(testDate.value > item.operationDate && testDate.value - item.operationDate < month.getTime() ){
            if(item.operationType === "outcome"){
                currentIncome -= item.operationsValue;
            }
            else if(item.operationType === "income"){
                currentIncome += item.operationsValue;
            }
        }
    })
    
    return <UserInfoStyled>
        <li>
            <p className="key">Рекомендований вклад</p>
            <p className="value">{grafickData.monthRecomendedIncome}</p>
        </li>
        <li>
            <p className="key">Фактичний вклад</p>
            <p className="value">{grafickData.monthTotalIncome}</p>
        </li>
        <li>
            <p className="key">Попередній вклад</p>
            <p className="value">{currentIncome}</p>
        </li>
    </UserInfoStyled>
}