import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../utils/url";
import axios from "axios";
import { useEffect, useState } from "react";
import {
	Container,
	Form,
	ButtonStyled,
	LoginPageLoading,
	DivButton,
} from "./style";
import Logo from "../../assets/Logo-Future.png";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logoLogin from "../../assets/logo-black.png";
import { goToFeed, goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { z, ZodError } from "zod";
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
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
			toast.success("Usuário Logado");
			goToFeed(navigate);
		} catch (error: any) {
			toast.error("Email ou senha incorretos!");
		}
	};

	const loginSchema = z.object({
		email: z.string().email("Formato de email inválido"),
		password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
	});

	const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const userLogin: LoginProps = {
			email: form.email,
			password: form.password,
		};

		try {
			loginSchema.parse(userLogin);
			fetchLogin(userLogin);
		} catch (error: any) {
			if (error instanceof z.ZodError) {
				setErrors(error.flatten().fieldErrors as {});
				toast.error(error.errors[0].message);
			} else {
				toast.error("Ocorreu um erro ao realizar o login");
			}
		}
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
					<Toaster position="top-center" />
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
								isInvalid={!!errors.email}
								errorBorderColor="red.300"
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
								isInvalid={!!errors.password}
								errorBorderColor="red.300"
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
					<DivButton>
						<button onClick={() => goToSignUp(navigate)}>
							Não possui cadastro? Clique aqui.
						</button>
					</DivButton>
				</Container>
			)}
		</>
	);
};

export default LoginPage;
