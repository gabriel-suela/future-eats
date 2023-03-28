import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { z, ZodError } from "zod";
import Header from "../../components/Header";
import useForm from "../../hooks/useForm";
import { goToSignUpAddress } from "../../routes/coordinator";
import { BASE_URL } from "../../utils/url";
import { ButtonStyled, Container, Form } from "./styled";

interface SignUpProps {
	name: string;
	email: string;
	cpf: string;
	password: string;
}
const SignUp = () => {
	const { form, onChange, clean } = useForm({
		name: "",
		email: "",
		cpf: "",
		password: "",
		confirmedPassword: "",
	});
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassoword] = useState(false);
	const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

	const handleConfirmedPassword = () =>
		setShowConfirmedPassword(!showConfirmedPassword);
	const handleClick = () => setShowPassoword(!showPassword);

	const signUpSchema = z.object({
		name: z.string().min(4, "O nome deve conter ao menos quatro caracteres"),
		email: z.string().email("Formato de email inválido"),
		cpf: z.string().max(15, "CPF deve ter 11 dígitos"),
		password: z.string().min(6, "A senha deve ter ao menos 6 caracteres"),
	});
	const navigate = useNavigate();

	const fetchSignUp = async (form: SignUpProps) => {
		try {
			const response = await axios.post(`${BASE_URL}/signup`, form);
			localStorage.setItem("token", response.data.token);
		} catch (error: any) {
			console.log(error);
		}
	};
	console.log(form.cpf);

	const onSubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (form.password === confirmPassword) {
				console.log("senhas iguais");
			} else {
				toast.error("As senhas devem ser idênticas");
			}
			signUpSchema.parse(form);
			fetchSignUp(form);
			goToSignUpAddress(navigate);
		} catch (error: any) {
			if (error instanceof z.ZodError) {
				toast.error(error.errors[0].message);
			} else {
				toast.error("Ocorreu um erro ao realizar o login");
			}
		}
	};

	const cpfMask = (value: string) => {
		const onlyDigits = value.replace(/\D/g, "");

		if (onlyDigits.length > 11) {
			return onlyDigits
				.slice(0, 11)
				.replace(/(\d{3})(\d)/, "$1.$2")
				.replace(/(\d{3})(\d)/, "$1.$2")
				.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
		}

		if (onlyDigits.length < 4) {
			return onlyDigits;
		}

		return onlyDigits
			.replace(/(\d{1,3}$)/, "-$1")
			.replace(/(\d{1,3})(-)(\d{2}$)/, ".$1$2$3")
			.replace(/(\d{1,3}\.\d{1,3})(-)(\d{2}$)/, "$1/$3");
	};
	return (
		<>
			<Container>
				<Toaster position="top-center" />
				<Header visibleArrow={true} />
				<p>Cadastro</p>
				<Form onSubmit={onSubmitSignUp}>
					<InputGroup size="md">
						<Input
							id="name"
							name="name"
							aria-label="name"
							type={"text"}
							placeholder="Digite seu nome"
							value={form.name}
							onChange={onChange}
							required
						/>
					</InputGroup>

					<InputGroup size="md">
						<Input
							id="email"
							name="email"
							aria-label="email"
							type={"email"}
							placeholder="Digite seu email"
							value={form.email}
							onChange={onChange}
							required
						/>
					</InputGroup>

					<InputGroup size="md">
						<Input
							id="cpf"
							name="cpf"
							aria-label="cpf"
							type={"text"}
							placeholder="Digite seu CPF"
							value={cpfMask(form.cpf)}
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
							placeholder="Mínimo 6 caracteres"
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

					<InputGroup>
						<Input
							id="password-confirm"
							name="password-confirm"
							value={confirmPassword}
							onChange={(e) => {
								setConfirmPassword(e.target.value);
							}}
							pr="4.5rem"
							type={showConfirmedPassword ? "text" : "password"}
							placeholder="Confirme a senha"
						/>
						<InputRightElement width="2.5rem">
							<Button
								h="1.75rem"
								background={"transparent"}
								onClick={handleConfirmedPassword}
							>
								{showConfirmedPassword ? (
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
					<ButtonStyled type="submit">Confirmar</ButtonStyled>
				</Form>
			</Container>
		</>
	);
};

export default SignUp;
