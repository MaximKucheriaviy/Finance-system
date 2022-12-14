import styled from "styled-components";

export const ContainerStyled = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
`


export const Container = ({children}) => {
    return <ContainerStyled>
        {children}
    </ContainerStyled>
}