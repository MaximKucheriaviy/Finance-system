import { MainStyled } from "pages/MainStyled";
import { AutorisationList } from "./AutorisationStyled";
import { Container } from "components/Container/Container";
import { nanoid } from "nanoid";
import { InputBox } from "components/InputBox/InputBox";
import { singIn, singUp } from "servises/firebaseApi";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "redux/actions";
import { useState } from "react";

export const Autorisation = () => {
    const loginEmailId = nanoid();
    const [singUpError, setSingUpError] = useState("");
    const [logInError, setLogInError] = useState("");
    const loginPasswordId = nanoid();
    const singinEmailId = nanoid();
    const singinPasswordId = nanoid();

    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    const singInHendler = async (event) => {
        event.preventDefault();
        setSingUpError("");
        const {email, password} = event.target;
        try{
            const data = await singIn(email.value, password.value);
            const userData = {
                email: data.email,
                accessToken: data.uid
            }
            dispatch(setUserInfo(userData));
        }
        catch(err){
            setSingUpError("Помилка входу");
            console.log(err, "message");
        }
    }

    const logInHendler = async (event) => {
        event.preventDefault();
        setLogInError("");
        const {email, password} = event.target;
        try{
            const data = await singUp(email.value, password.value);
            const userData = {
                email: data.email,
                accessToken: data.uid
            }
            dispatch(setUserInfo(userData));
        }
        catch(err){
            setLogInError("Помилка реєстрації");
            console.log(err);
        }
    }

    return <MainStyled>
        {userInfo.email && <Navigate to="/"/>}
        <Container>
            <AutorisationList>
                <li>
                    <form onSubmit={singInHendler}>
                        <div className="data">
                            <h2>Увійти</h2>
                            <InputBox> 
                                <label htmlFor={loginEmailId}>E-mail</label>
                                <input type="text" name="email" id={loginEmailId}/>
                            </InputBox>
                            <InputBox> 
                                <label htmlFor={loginPasswordId}>Password</label>
                                <input type="password" name="password" id={loginPasswordId}/>
                            </InputBox>
                        </div>
                        {singUpError && <p className="errorMessage">{singUpError}</p>}
                        <button type="submit">Виконати вхід</button>
                    </form>
                </li>
                <li>
                    <form onSubmit={logInHendler}>
                        <div className="data">
                            <h2>Зареєструватись</h2>
                            <InputBox> 
                                <label htmlFor={singinEmailId}>E-mail</label>
                                <input type="text" name="email" id={singinEmailId}/>
                            </InputBox>
                            <InputBox> 
                                <label htmlFor={singinPasswordId}>Password</label>
                                <input type="text" name="password" id={singinPasswordId}/>
                            </InputBox>
                        </div>
                        {logInError && <p className="errorMessage">{logInError}</p>}
                        <button type="submit">Підтвердити реєстрацію</button>
                    </form>
                </li>
            </AutorisationList>
        </Container>
    </MainStyled>
}