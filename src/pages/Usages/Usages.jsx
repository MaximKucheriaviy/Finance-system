import { UsagesStyled, Income, Outcome } from "./UsagesStyled"
import { Container } from "components/Container/Container"
import { useState, useEffect } from "react"
import { setUserDocumentData } from "servises/firebaseApi"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const Usages = () => {
    const userDocId = useSelector(state => state.userDocId.value)
    const userUsage = useSelector(state => state.userDocument.usage);
    const [operations, setOperations] = useState([]);
    const [operationType, setOperationType] = useState("");
    const [operationsValue, setOperationsValue] = useState("");
    useEffect(() => {
        if(!userUsage){
            return;
        }
        setOperations(JSON.parse(userUsage));
    }, [userUsage]);
    useEffect(() => {
        if(operations.length === 0 || !userDocId){
            return;
        }

        setUserDocumentData(userDocId, "usage", JSON.stringify(operations));
    }, [operations, userDocId]);
    const radioHandler = (event) => {
        const value = event.target.value;
        setOperationType(value);
    }

    const inputHendled = (event) => {
        const value = event.target.value;
        setOperationsValue(value);
    }

    const submitHendler = (event) => {
        event.preventDefault();
        const input = {
            operationType,
            operationsValue
        }
        setOperations((prev) => {
            const newArr = [...prev];
            newArr.push(input);
            return newArr;
        })
        setOperationsValue("");
    }
    return <UsagesStyled>
        {!userDocId && <Navigate to="/"/>}
        <Container>
            <h2>Введіть витрати</h2>
            <form onSubmit={submitHendler}>
                <label>
                    Попвнення
                    <input type="radio" onInput={radioHandler} name="type" value="income" />
                </label>
                <label>
                    Витрата
                    <input type="radio" onInput={radioHandler} name="type" value="outcome"/>
                </label>
                <label>
                    Сума
                    <input onChange={inputHendled} type="text" name="sum" value={operationsValue}/>
                </label>
                <button type="submit">Ввести</button>
            </form>
            {operations.length !== 0 && <ul>
                {operations.map(({operationType, operationsValue}, index) => {
                    if(operationType === "income"){
                        return <Income key={index}>{`+${operationsValue}`}</Income>
                    }
                    else{
                        return <Outcome key={index}>{`-${operationsValue}`}</Outcome>
                    }
                }).reverse()}
            </ul>}
        </Container>
    </UsagesStyled>
}