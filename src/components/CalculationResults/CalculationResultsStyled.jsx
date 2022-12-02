import styled from "styled-components";

export const ResultsSyled = styled.div`
    & .info{
        background-color: #b87700;
        padding: 20px;
        border-radius: 20px;
        & h3{
            margin-bottom: 20px;
        }
        width: 800px;
        margin-left: auto;
        margin-right: auto;
        & li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
            display: flex;
            justify-content: space-between;
        }
    }
`