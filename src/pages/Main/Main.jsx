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
            <h2>Загогловок</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit provident maxime aut assumenda blanditiis. Nulla illum magnam laborum, eaque, architecto incidunt aliquid in aspernatur minus quia fuga quasi maxime optio vero rem eveniet dolor quidem exercitationem iste facere harum nisi facilis ea. Ipsa assumenda fuga quis! Debitis, deleniti perspiciatis facere repellat error dolor provident. Hic, adipisci! Inventore eaque veritatis similique consequuntur eveniet excepturi nulla tempore fugit porro dolorum perspiciatis iste numquam in reprehenderit quia quod, delectus ex quas placeat ea facere minus? Dolore, dolores? Accusantium rem accusamus aliquid vel provident modi laudantium repellendus. Quos beatae, dignissimos ratione voluptates veniam possimus nostrum assumenda fugiat quod cumque error nihil odio impedit, quisquam aperiam, voluptatem veritatis corrupti modi! Accusantium porro asperiores ab. Fugiat consequatur, explicabo, voluptates exercitationem, beatae illo facilis possimus quidem fugit cupiditate ad dicta aperiam quas! Provident fugit cumque, minima iste dolores rem aliquam illo, repudiandae nostrum explicabo ipsa, ratione necessitatibus non. Ut tempore maiores quae velit iure, suscipit quasi eos necessitatibus iste explicabo magni eius. A praesentium quod animi placeat esse, molestiae excepturi quaerat maiores, odit, assumenda doloremque eum ut minima blanditiis perferendis cupiditate delectus sit molestias mollitia ratione consequatur totam libero velit. Eius illum impedit aliquam, distinctio vitae tempore sit accusantium culpa quas optio, eveniet recusandae iusto odit nemo ipsam ut. Assumenda, ducimus. Recusandae ex optio porro quis itaque id deleniti velit, officiis, ullam possimus cupiditate illo explicabo non vel nam debitis eaque. Sint aliquam quasi inventore recusandae eius maiores obcaecati voluptas veniam fugiat facilis repudiandae, magnam ea, sit aspernatur vitae? Laboriosam repudiandae debitis consequatur molestias minima veritatis ipsum nostrum, velit possimus maxime perferendis aliquam iusto deleniti, nulla, corporis omnis sequi aliquid veniam accusantium deserunt! Et quae eveniet, odit ex sapiente soluta exercitationem ea rem animi, quaerat molestias eos, aspernatur magni. Perspiciatis modi deserunt, quis voluptas alias hic eos.</p>
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