import { MainStyled, MainButton } from "../MainStyled"
import { Container } from "components/Container/Container"
import { MainForm } from "components/MainForm/MainForm"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { reset } from "servises/firebaseApi"



export const Main = () => {
    const userData = useSelector(state => state.userInfo);
    const userDocumentStart = useSelector(state => state.userDocument.start);
    const docId = useSelector(state => state.userDocId.value);
    const [appStarted, setAppstarted] = useState(false);
    useEffect(() => {
        setAppstarted(userDocumentStart ? JSON.parse(userDocumentStart).value : false);
    }, [userDocumentStart])
    return <MainStyled>
        <Container>
            <h2>Вітаю тебе на головній сторінці, юзере!</h2>
            <p>Якщо ви відвідали цей сайт, значить у вас напевно є великі цілі, яких ви хочете досягти. Наш інструментарій з радістю допоможе вам систематизувати ваші фінанси, щоб ви змогли в найкоротші терміни досягти цієї мети!</p>
            {!userData.email ?
                <MainButton to="autorisation">Увійдіть або зараєструйтеся щоб продовжити</MainButton>: 
                <>
                    {!appStarted ? 
                        <MainForm/>:
                        <MainButton to="statistic">Перейти до графіків</MainButton>
                    }
                    
                </>}
                <button onClick={() => reset(docId)}>reset</button>
        </Container>
    </MainStyled>
}