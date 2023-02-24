import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const CardsRestaurant = styled.div`
  padding: 0 1rem;
  border-radius: 10px;
`;

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  height: 2.62rem;
  overflow-y: auto;
`;

export const MenuItem = styled.button`
  font-weight: normal;
  font-size: 1rem;
  border: none;
  outline: none;
  padding: 0 1rem;
  background: transparent;
  text-align: center;
  color: black;
  &:hover{
    color: var(--mid-green);
  }
`;
