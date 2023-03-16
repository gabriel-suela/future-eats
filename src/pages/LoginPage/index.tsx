import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../utils/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, ButtonStyled } from "./style";
import Logo from "../../assets/Logo-Future.png";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
interface LoginResponse {
  email: string;
  password: string;
  token: string;
}

interface LoginProps {
  email: string;
  password: string;
}

interface ErrorResponseType {
  response: { data: { message: string } };
}

const LoginPage = () => {
  const { form, onChange, clean } = useForm({
    email: "",
    password: "",
  });
  const [showLogo, setShowLogo] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  useEffect(() => {}, []);

  const fetchLogin = async (form: LoginProps) => {
    try {
      const response = await axios.post<LoginProps>(`${BASE_URL}/login`, form);
      localStorage.setItem("token", response.data.token);
      alert("Usuário Logado");
    } catch (err) {
      console.error("An error occurred during login.", err);
      alert("Houve um erro ao tentar realizar o login.");
    }
  };

  const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userLogin: LoginProps = {
      email: form.email,
      password: form.password,
    };

    fetchLogin(userLogin);
  };

  return (
    <Container>
      <img src={Logo} />
      <Form onSubmit={onSubmitLogin}>
        <InputGroup size="md">
          <Input
            id="email"
            name="email"
            aria-label="email"
            type={"email"}
            placeholder="Enter Email"
            value={form.email}
            onChange={onChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" onClick={handleClick}>
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Container>
  );
};

export default LoginPage;
