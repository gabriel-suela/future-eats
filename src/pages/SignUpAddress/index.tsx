import { Input, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../utils/url";
import { ButtonStyled, Container, Form } from "./styled";

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

  const fetchAddress = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/address`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      });
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    fetchAddress();
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
            aria-label="street"
            type={"text"}
            placeholder="Rua / Av."
            value={form.street}
            onChange={onChange}
            required
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            id="number"
            name="number"
            aria-label="number"
            type={"number"}
            placeholder="Número"
            value={form.number}
            onChange={onChange}
            required
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
            required
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
            required
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
            required
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
            required
          />
        </InputGroup>
        <ButtonStyled>Confirmar</ButtonStyled>
      </Form>
    </Container>
  );
};

export default SignUpAddress;
