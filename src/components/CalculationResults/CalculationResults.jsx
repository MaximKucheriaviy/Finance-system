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
        </ResultsSyled>
    )
}