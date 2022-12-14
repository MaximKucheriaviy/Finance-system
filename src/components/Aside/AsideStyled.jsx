import styled from "styled-components";

export const AsideStyled = styled.aside`
    border: 1px solid ${props => props.theme.borderColor};
    min-height: 100vh;
    width: 200px;
    flex-shrink: 0;
    padding: 10px;
    background-color: ${props => props.theme.mainBackground};
    box-shadow: 1px 1px 5px black;

    text-align: center;
    & h2{
        font-size: 20px;
        margin-bottom: 20px;
    }

    & .box{
        box-shadow: 0px 0px 10px black;
        border-radius: 10px;
        padding: 10px;
    }

    & ul{
        & li{
            display: flex;
            justify-content: space-between;
            &:not(:last-child){
                margin-bottom: 10px;
            }
            padding-left: 10px;
            padding-right: 10px;
            border-bottom: 1px solid #b87700;
        }
        & .key{
            font-weight: 800;
        }
    }
`