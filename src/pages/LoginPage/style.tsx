import styled from "styled-components";

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
    margin: 60px 128px 16px;
    object-fit: contain;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: space-evenly;

  input {
    margin-bottom: 15px;
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
  text-align: center;
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
