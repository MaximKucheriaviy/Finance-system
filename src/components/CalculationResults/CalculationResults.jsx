import { ResultsSyled } from "./CalculationResultsStyled"

export const CalculationResults = ({startSum, totalIncome, pureIncome, tableData}) => {

    return (
        <ResultsSyled>
            <div className="info">
                <h3>Результати розрахунку</h3>
                <ul>
                    <li>
                        <p>Початкова сума</p>
                        <p>{startSum}</p>
                    </li>
                    <li>
                        <p>Підсумковий прибуток</p>
                        <p>{pureIncome}</p>
                    </li>
                    <li>
                        <p>Сума до видачі</p>
                        <p>{totalIncome}</p>
                    </li>
                </ul>
            </div>
            {tableData && <table className="tableData">
                <thead>
                    <tr>
                    <th>Місяць</th>
                    <th>Тіло вкладу</th>
                    <th>Дохід</th>
                    <th>Разом</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(item => <tr key={item.month}>
                        <td>{item.month}</td>
                        <td>{(item.body).toFixed(2)}</td>
                        <td>{(item.income).toFixed(2)}</td>
                        <td>{(item.total).toFixed(2)}</td>
                    </tr>)}
                </tbody>
            </table>}
        </ResultsSyled>
    )
}