import styled from "styled-components";


export const UserInfoStyled = styled.ul`
    margin-top: 40px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    box-shadow: 0px 0px 10px black;
    border-radius: 10px;
    padding: 20px;
    & li{
        display: flex;
        justify-content: space-between;
        &:not(:last-child){
            margin-bottom: 10px;
        }
        border-bottom: 1px solid #b87700;
    }
    & .key{
        font-weight: 800;
    }
`