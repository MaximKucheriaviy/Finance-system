import styled from "styled-components";


export const StatisticStyled = styled.main`
    margin-top: 40px;
    // border: 1px solid black;
    & .timeButtonContainer{
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        gap: 20px;
        & .timeButton{
            background-color: #b87700;
            min-width: 150px;
            padding-left: 10px;
            padding-right: 10px;
            height: 30px;
            border-radius: 10px;
            border: 1px solid #973c00;
            font-size: 15px;
            font-weight: 700;
        }
    }

    & .resetButton{
        background-color: #b87700;
        min-width: 150px;
        padding-left: 10px;
        padding-right: 10px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid #973c00;
        font-size: 15px;
        font-weight: 700;
    }
    & .text{
        margin-bottom: 20px;
    }
`

