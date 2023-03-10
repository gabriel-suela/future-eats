import styled from "styled-components";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const InputMaterial = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 10px;
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
  margin-top: 30px;
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
    background-color:var(--mid-green);
    width: 100%;
  }
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
