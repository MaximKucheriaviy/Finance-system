import styled from "styled-components";

export const AsideStyled = styled.aside`
    border: 1px solid ${props => props.theme.borderColor};
    min-height: 100vh;
    padding: 30px;
    background-color: ${props => props.theme.mainBackground};
    box-shadow: 1px 1px 5px black;
`