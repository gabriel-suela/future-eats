import { Input, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useForm from "../../hooks/useForm";
import { goToFeed } from "../../routes/coordinator";
import { BASE_URL } from "../../utils/url";
import { ButtonStyled, Container, Form } from "./styled";

interface SignUpAddressProps {
  street: string;
  number: number;
  neighbourhood: string;
  city: string;
  state: string;
  complement: string;
}

const SignUpAddress = () => {
  const { form, onChange, clean } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const navigate = useNavigate();

  const fetchAddress = async (form: SignUpAddressProps) => {
    try {
      const response = await axios.put(`${BASE_URL}/address`, form, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      });
      localStorage.setItem("token", response.data.token);
      alert("Usuário cadastrado");
      clean();
    } catch (error: any) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    await fetchAddress(form);
    goToFeed(navigate);
  };

  return (
    <Container>
      <Header visibleArrow={true} />
      <p>Meu endereço</p>
      <Form onSubmit={onSubmitForm}>
        <InputGroup size="md">
          <Input
            id="street"
            name="street"
            aria-label="Logradouro"
            type={"text"}
            placeholder="Rua / Av."
            value={form.street}
            onChange={onChange}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            id="number"
            name="number"
            aria-label="number"
            type="number"
            placeholder="Número"
            value={form.number}
            onChange={onChange}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            id="complement"
            name="complement"
            aria-label="complement"
            type={"text"}
            placeholder="Apto. / Bloco"
            value={form.complement}
            onChange={onChange}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            id="neighbourhood"
            name="neighbourhood"
            aria-label="Bairro"
            type={"text"}
            placeholder="Bairro"
            value={form.neighbourhood}
            onChange={onChange}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            id="city"
            name="city"
            aria-label="city"
            type={"text"}
            placeholder="Cidade"
            value={form.city}
            onChange={onChange}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            id="state"
            name="state"
            aria-label="state"
            type={"text"}
            placeholder="Estado"
            value={form.state}
            onChange={onChange}
          />
        </InputGroup>
        <ButtonStyled type="submit">Confirmar</ButtonStyled>
      </Form>
    </Container>
  );
};

export default SignUpAddress;
