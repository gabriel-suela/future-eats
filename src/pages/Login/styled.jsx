import styled from "styled-components";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const InputMaterial = styled(TextField)`
  && {
    width: 100%;
  }
`;

export const Main = styled.div`
  padding: 5px 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 90%;
  justify-content: space-evenly;
`;
export const ButtonStyled = styled(Button)`
  && {
    color: black;
    background-color: #e8222e;
    width: 100%;
  }
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const DivButton = styled.div`
     button{
    width: 360px;
    height: 42px;
    border: 0;
    background: white;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
  }
`
