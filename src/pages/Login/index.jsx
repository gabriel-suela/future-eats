import React, { useEffect, useState } from "react";
import {
  Main,
  Form,
  ButtonStyled,
  DivPassword,
  InputMaterial,
  DivButton,
  LoginPageLoading,
} from "./styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";
import Logo from "../../assets/Logo-Future.png";
import logoLogin from "../../assets/LoginLogo.png";

const LoginPage = () => {
  const { form, onChange, clean } = useForm({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");
  const [checkErrEmail, setCheckErrEmail] = useState(false);
  const [checkErrPass, setCheckErrPass] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 2000);
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    loginApi(userLogin);
  };

  const loginApi = async () => {
    await axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clean();
        setCheckErrEmail(false);
        setCheckErrPass(false);
        alert(`Bem vindo ${res.data.user.name}`);
        goToFeed(navigate);
      })
      .catch((err) => {
        if (err.response.data.message.includes("Senha incorreta")) {
          setErrPass(err.response.data.message);
          setCheckErrPass(true);
        } else {
          setErrEmail(err.response.data.message);
          setCheckErrEmail(true);
        }
      });
  };

  return (
    <>
      {showLogo && (
        <LoginPageLoading>
          <img src={logoLogin} />
        </LoginPageLoading>
      )}

      {!showLogo && (
        <Main>
          <img src={Logo}></img>
          <p>Entrar</p>
          <Form onSubmit={onSubmitLogin}>
            <InputMaterial
              error={checkErrEmail}
              helperText={checkErrEmail ? errEmail : ""}
              id="email"
              name={"email"}
              label="Email"
              type={"email"}
              variant="outlined"
              placeholder={"email@email.com"}
              value={form.email}
              onChange={onChange}
              required
            />
            <DivPassword>
              <InputMaterial
                error={checkErrPass}
                helperText={checkErrPass ? errPass : ""}
                id="password"
                name={"password"}
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                placeholder={"Mínimo 6 caracteres"}
                value={form.password}
                onChange={onChange}
                inputProps={{ minlenght: 6 }}
                required
              />
            </DivPassword>
            <ButtonStyled type="submit">Entrar</ButtonStyled>
          </Form>
          <DivButton>
            <button onClick={() => goToSignUp(navigate)}>
              Não possui cadastro? Clique aqui.
            </button>
          </DivButton>
        </Main>
      )}
    </>
  );
};
export default LoginPage;
