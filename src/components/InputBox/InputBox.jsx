import styled from "styled-components";

export const InputBox = styled.div`
   text-align: left;
   & label{
    font-weight: 800;
   }
   & input{
    margin-top: 5px;
    height: 40px;
    width: 400px;
    background-color: transparent;
    border: 2px solid orange;
    border-radius: 10px;
    font-size: 14px;
    padding-left: 10px;
    &:focus-visible{
        outline: none;
        border: 2px solid ${props => props.theme.inputSelectedColor};
    }
   }
`

export const RadioButton = styled.div`
    display: flex;
    & label{
        font-weight: 800;
    }
    & input{
        margin-left: 5px;
    }
`

export const RadioContainer = styled.div`
    & .thumb{
        display: flex;
        gap: 10px;
    }
    & > .checkboxContainerLabel{
        font-weight: 800;
    }
`