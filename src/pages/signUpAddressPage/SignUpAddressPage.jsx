import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import { goToFeed } from "../../routes/coordinator";
import { ButtonStyled, Form, InputMaterial, Main } from "./styled";

const SignUpAddress = () => {
  const { form, onChange, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const navigate = useNavigate();

  const addAddress = async () => {
    const token = localStorage.getItem("token");
    await axios
      .put(`${BASE_URL}/address`, form, { headers: { auth: token } })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Endereço cadastrado com sucesso");
        clear();
      })
      .catch((err) => {
        alert(`${err.response.data.message}`);
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    addAddress();
    goToFeed(navigate);
  };
  return (
    <Main>
      <p>Meu endereço</p>
      <Form onSubmit={onSubmitForm}>
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="street"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChange}
        />

        <InputMaterial
          id="outlined-basic"
          label={"Número"}
          name="number"
          type={"number"}
          placeholder={"Número"}
          variant="outlined"
          value={form.number}
          onChange={onChange}
        />

        <InputMaterial
          id="outlined-basic"
          label={"Complemento"}
          name="complement"
          type={"text"}
          placeholder={"Apto. / Bloco"}
          variant="outlined"
          value={form.complement}
          onChange={onChange}
        />

        <InputMaterial
          id="outlined-basic"
          label={"Bairro"}
          name="neighbourhood"
          type={"text"}
          placeholder={"Bairro"}
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChange}
        />

        <InputMaterial
          id="outlined-basic"
          label={"Cidade"}
          name="city"
          type={"text"}
          placeholder={"Cidade"}
          variant="outlined"
          value={form.city}
          onChange={onChange}
        />

        <InputMaterial
          id="outlined-basic"
          label={"Estado"}
          name="state"
          type={"text"}
          placeholder={"Estado"}
          variant="outlined"
          value={form.state}
          onChange={onChange}
        />
        <ButtonStyled type="submit">Confirmar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default SignUpAddress;
