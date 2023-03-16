import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../utils/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, ButtonStyled, LoginPageLoading } from "./style";
import Logo from "../../assets/Logo-Future.png";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logoLogin from "../../assets/logo-black.png";
import { goToFeed } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
interface LoginResponse {
  email: string;
  password: string;
  token: string;
}

interface LoginProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { form, onChange, clean } = useForm({
    email: "",
    password: "",
  });
  const [showLogo, setShowLogo] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 2000);
  }, []);

  const fetchLogin = async (form: LoginProps) => {
    try {
      const response = await axios.post<LoginResponse>(
        `${BASE_URL}/login`,
        form
      );
      localStorage.setItem("token", response.data.token);
      clean();
      alert("Usuário Logado");
      goToFeed(navigate);
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
    <>
      {showLogo && (
        <LoginPageLoading>
          <img src={logoLogin} />
        </LoginPageLoading>
      )}
      {!showLogo && (
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
              <InputRightElement width="2.5rem">
                <Button
                  h="1.75rem"
                  background={"transparent"}
                  onClick={handleClick}
                >
                  {showPassword ? (
                    <ViewIcon
                      boxSize={5}
                      color="gray.500"
                      background={"transparent"}
                    />
                  ) : (
                    <ViewOffIcon
                      boxSize={5}
                      color="gray.500"
                      background={"transparent"}
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <ButtonStyled type="submit">Entrar</ButtonStyled>
          </Form>
        </Container>
      )}
    </>
  );
};

export default LoginPage;
