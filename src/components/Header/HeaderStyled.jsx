import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ContainerStyled } from "components/Container/Container";

export const HeaderStyled = styled.header`
    border-bottom: 1px solid black;
    box-shadow: 0px 0px 5px black;

    & ul{
        display: flex;
        gap: 20px;
    }

    & img{
        width: 200px;
        height: 100px;
        /* outline: 2px solid red; */
    }
`

export const StyledLink = styled(NavLink)`
    &.active{
        color: red;
    }
`

export const HeaderContainer = styled(ContainerStyled)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`