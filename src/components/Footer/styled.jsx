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
  box-shadow: 0px -6px 6px -10px rgba(0, 0, 0, 0.75);
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #b8b8b8;
  && :hover {
    color: #5cb646;
  }
`;
