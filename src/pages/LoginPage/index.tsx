import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../utils/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, ButtonStyled } from "./style";
import Logo from "../../assets/Logo-Future.png";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
interface LoginProps {
  email: string;
  password: string;
}
type UserLogin = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { form, onChange, clean } = useForm({
    email: "",
    password: "",
  });
  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");
  const [checkErrEmail, setCheckErrEmail] = useState(false);
  const [checkErrPass, setCheckErrPass] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  useEffect(() => {}, []);

  const fetchLogin = async () => {
    try {
      await axios.post<LoginProps[]>(`${BASE_URL}/login`, form);
      clean();
      setCheckErrEmail(false);
      setCheckErrPass(false);
      alert("Usuário Logado");
    } catch (error: any) {
      if (error.response.data.message.includes("Senha incorreta")) {
        setErrPass(error.response.data.message);
        setCheckErrPass(true);
      } else {
        setCheckErrEmail(error.respose.data.message);
        setCheckErrEmail(true);
      }
    }
    fetchLogin();
  };

  const onSubmitLogin = (e: any) => {
    e.preventDefault();

    fetchLogin();
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
            placeholder="email@email.com"
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
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" onClick={handleClick}>
              {show ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Container>
  );
};

export default LoginPage;
