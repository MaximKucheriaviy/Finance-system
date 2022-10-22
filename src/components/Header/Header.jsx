import { HeaderStyled, StyledLink } from "./HeaderStyled"
import { HeaderContainer } from "./HeaderStyled"
import { useSelector, useDispatch } from "react-redux"
import { setUserInfo } from "redux/actions"
export const Header = () => {
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const clickHendler = (event) => {
        dispatch(setUserInfo({}))
    }
    return <HeaderStyled>
        <HeaderContainer>
            <h1>Фінансовий помічник</h1>
            <nav>
                <ul>
                    <li><StyledLink to="/" end>Головна</StyledLink></li>
                    <li><button  onClick={clickHendler}>Вийти</button></li>
                    {!userInfo.email ? 
                    <li><StyledLink to="autorisation" end>Увійти</StyledLink></li>:
                    <>
                        <li><StyledLink to="usages">Витрати</StyledLink></li>
                        <li><StyledLink to="statistic">Графіки</StyledLink></li>
                    </>
                    }
                    <li><StyledLink to="calculator">Калькулятор</StyledLink></li>
                </ul>
            </nav>
        </HeaderContainer>
    </HeaderStyled>
}

