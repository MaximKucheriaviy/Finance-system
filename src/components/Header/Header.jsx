import { HeaderStyled, StyledLink } from "./HeaderStyled"
import { HeaderContainer } from "./HeaderStyled"

export const Header = () => {
    return <HeaderStyled>
        <HeaderContainer>
            <h1>Фінансовий помічник</h1>
            <nav>
                <ul>
                    <li><StyledLink to="/" end>Головна</StyledLink></li>
                    <li><StyledLink to="usages">Витрати</StyledLink></li>
                    <li><StyledLink to="statistic">Графіки</StyledLink></li>
                    <li><StyledLink to="calculator">Калькулятор</StyledLink></li>
                </ul>
            </nav>
        </HeaderContainer>
    </HeaderStyled>
}

