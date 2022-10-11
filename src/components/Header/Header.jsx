import { HeaderStyled, StyledLink } from "./HeaderStyled"

export const Header = () => {
    return <HeaderStyled>
        <div className="container">
            <h1>Фінансовий помічник</h1>
            <nav>
                <ul>
                    <li><StyledLink to="/" end>Головна</StyledLink></li>
                    <li><StyledLink to="/graphiks">Графіки</StyledLink></li>
                    <li><StyledLink to="/calculator">Калькулятор</StyledLink></li>
                </ul>
            </nav>
        </div>
    </HeaderStyled>
}

