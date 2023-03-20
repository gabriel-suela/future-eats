import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { goToLastPage, goToLogin } from "../../routes/coordinator";
import { Container, Title } from "./style";
import { CiLogout } from "react-icons/ci";

interface HeaderProps {
	title?: string;
	visibleArrow: boolean;
}

const Header = ({ title, visibleArrow }: HeaderProps) => {
	const logOut = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const navigate = useNavigate();
	return (
		<Container>
			{visibleArrow && (
				<ChevronLeftIcon
					boxSize={7}
					onClick={() => {
						goToLastPage(navigate);
					}}
				/>
			)}
			<Title>{title}</Title>
			<CiLogout onClick={logOut} />
		</Container>
	);
};

export default Header;
