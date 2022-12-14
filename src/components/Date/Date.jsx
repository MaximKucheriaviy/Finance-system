import styled from "styled-components";

const StyledDate = styled.div`
    margin-top: 10px;
    display: inline-flex;
    padding: 5px;
    border-radius: 10px;
    gap: 4px;
    font-size: 20px;
    border: 2px solid black;
    box-shadow: inset 0px 0px 3px black;
`

export const DateShow = ({date}) => {
    const showDate = new Date(date);
    return <StyledDate>
        <p>{showDate.getMonth() + 1}</p>
        <p>/</p>
        <p>{showDate.getFullYear()}</p>
        {/* <p>{showDate.getDate()}</p> */}
    </StyledDate>    
}