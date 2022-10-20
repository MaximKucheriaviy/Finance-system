import styled from "styled-components";


export const UsagesStyled = styled.main`
    margin-top: 40px;
    // border: 1px solid black;
`

const operation = styled.li`
    padding: 20px;
    width: 200px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 24px;
`

export const Outcome = styled(operation)`
    
    color: red;
    border: 2px solid red;
`

export const Income = styled(operation)`
    color: green;
    border: 2px solid green;
`

