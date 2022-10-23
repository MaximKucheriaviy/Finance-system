import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const MainStyled = styled.main`
    margin-top: 40px;
`

export const MainButton = styled(NavLink)`
display: inline-block;
    margin-top: 20px;
    background-color: #b87700;
    border-radius: 10px;
    border: 1px solid #973c00;
    font-size: 15px;
    font-weight: 700;
    padding: 10px;
`