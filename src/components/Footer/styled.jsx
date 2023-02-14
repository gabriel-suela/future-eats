import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 49px;
    position: fixed;
    right: 0;
    top: 800px;
    background-color: white;

`

export const FooterIcons = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;
    color: grey;
    && :hover{
        color: #5cb646;
    }
`