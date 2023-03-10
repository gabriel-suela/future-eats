import styled from "styled-components";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const InputMaterial = styled(TextField)`
  && {
    width: 100%;
    margin: 8px 0;
  }
`;

export const LoginPageLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000000;

  img {
    width: 130px;
    height: 65px;
    object-fit: contain;
  }
`;

export const Container = styled.div`
  padding: 5px 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 104px;
    height: 58px;
    margin: 68px 128px 16px;
    object-fit: contain;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
    background-color: var(--mid-green);
    width: 100%;
  }
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  button {
    position: absolute;
    box-sizing: border-box;
    top: 30%;
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

export const DivButton = styled.div`
  button {
    width: 360px;
    height: 42px;
    border: 0;
    background: white;
    font-size: 16px;
    letter-spacing: -0.39px;
    margin-top: 28px;
  }
`;
