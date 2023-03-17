import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 90%;
  justify-content: space-evenly;
  input {
    height: 50px;
  }
`;

export const ButtonStyled = styled.button`
  margin-top: 16px;
  height: 42px;
  border-radius: 2px;
  color: black;
  background-color: var(--mid-green);
  width: 100%;
`;
