import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import {
  ButtonStyled,
  Container,
  DivPassword,
  Form,
  InputMaterial,
} from "./styled";
import { BASE_URL, validatePassword } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { goToSignUpAddress } from "../../routes/coordinator";
import Header from "../../components/Header/Header";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";

const SignUp = () => {
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checkErrPass, setCheckErrPass] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [isPasswordValid, setIsPasswordValid] = useState(undefined);
  const [isCPFValid, setIsCPFValid] = useState(undefined);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(undefined);

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmedPassword = () => {
    setShowConfirmedPassword(!showConfirmedPassword);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setIsNameValid(validateName(form.name))
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        setIsCPFValid(validateCPF(form.cpf))

    if (form.password !== confirmPassword) {
      setCheckErrPass(true);
    } else {
      setCheckErrPass(false);
      isEmailValid && isPasswordValid && isCPFValid && isNameValid && isConfirmPasswordValid && signUp();
    }
  };

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const signUp = async () => {
    await axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Usuário Cadastrado com sucesso!!");
        clean();
        setConfirmPassword("");
        goToSignUpAddress(navigate);
      })
      .catch((err) => {
        alert(`${err.response.data.message}`);
      });
  };

  return (
    <Container>
      <Header visibleArrow={true} />
      <p>Cadastrar</p>
      <Form onSubmit={onSubmitForm}>
        <InputMaterial
          id="name"
          label={"Nome"}
          name="name"
          type={"text"}
          placeholder={"Digite seu nome"}
          variant="outlined"
          value={form.name}
          onChange={onChange}
          isValid={isNameValid}
        />

        <InputMaterial
          id="email"
          label={"Email"}
          name="email"
          type={"email"}
          placeholder={"Digite seu Email"}
          variant="outlined"
          value={form.email}
          onChange={onChange}
          isValid={isEmailValid}
        />

        <InputMaterial
          id="cpf"
          label={"CPF"}
          name="cpf"
          type={"text"}
          placeholder={"Digite seu Cpf"}
          variant="outlined"
          value={cpfMask(form.cpf)}
          onChange={onChange}
          isValid={isCPFValid}
        />

        <DivPassword>
          <InputMaterial
            id="password"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            placeholder={"Mínimo 6 caracteres"}
            value={form.password}
            onChange={onChange}
            isValid={validatePassword}
            required
          />
          <button onClick={handleClickShowPassword} type="button">
            {showPassword ? <IoEyeSharp /> : <BsFillEyeSlashFill />}
          </button>
        </DivPassword>

        <DivPassword>
          <InputMaterial
            error={checkErrPass}
            helperText={checkErrPass ? "Deve ser a mesma que a anterior." : ""}
            id="password-confirm"
            name="password-confirm"
            label="Confirmar"
            type={showConfirmedPassword ? "text" : "password"}
            variant="outlined"
            placeholder={"Mínimo 6 caracteres"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required
            isValid={isConfirmPasswordValid}
          />
        </DivPassword>
        <ButtonStyled type={"submit"}>Confirmar</ButtonStyled>
      </Form>
    </Container>
  );
};

export default SignUp;
