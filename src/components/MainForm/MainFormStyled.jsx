import styled from "styled-components";

export const StyledForm = styled.form`
    margin-top: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 10px;
    box-shadow: 0px 0px 10px black;
    border-radius: 10px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 450px;

    & button{
        margin-top: 20px;
        background-color: #b87700;
        width: 200px;
        height: 50px;
        border-radius: 10px;
        border: 1px solid #973c00;
        font-size: 15px;
        font-weight: 700;
    }
`