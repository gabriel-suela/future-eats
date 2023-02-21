import styled from "styled-components";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const InputMaterial = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 15px;
  }
`;

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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 90%;
  justify-content: space-evenly;
`;
export const ButtonStyled = styled(Button)`
  && {
    margin-top: 16px;
    height: 42px;
    padding: 12px 16px;
    border-radius: 2px;
    color: black;
    background-color: #5cb646;
    width: 100%;
  }
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  button {
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 41%;
    right: 10%;
    transform: translateY(-50%);
    background-color: transparent;
    border: 0;
    svg {
      width: 24px;
      height: 24px;
      margin: 5px 0 0 8px;
      object-fit: contain;
      color: var(--greyish);
    }
  }
`;
