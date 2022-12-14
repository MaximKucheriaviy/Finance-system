import styled from "styled-components";

export const AutorisationList = styled.ul`
    display: flex;
    & li{
        flex-grow: 2;
        text-align: center;
        padding: 0px 60px;
    }
    & h2{
        margin-bottom: 20px;
    }
    & form{
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        /* gap: 10px; */
        box-shadow: 0px 0px 10px black;
        border-radius: 10px;
        min-height: 355px;

        & .data{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    }
    & button{
        /* margin-top: 20px; */
        background-color: #b87700;
        width: 200px;
        height: 50px;
        border-radius: 10px;
        border: 1px solid #973c00;
        font-size: 15px;
        font-weight: 700;
    }

    & .errorMessage{
        color: red;
        font-weight: 700;
    }
`