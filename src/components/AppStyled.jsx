import styled from "styled-components";

export const AppStyled = styled.div`
    display: flex;
    gap: 10px;
`;

export const PageContainer = styled.div`
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.mainBackground};
    box-shadow: 1px 1px 5px black;
`;