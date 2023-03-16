import {
  Cart,
  Container,
  FooterIcons,
  Home,
  MenuContainerSpace,
  Profile,
} from "./style";
import { useNavigate } from "react-router-dom";
import { goToCart, goToFeed, goToProfile } from "../../routes/coordinator";

interface PageProps {
  page: string;
}

const NavBar = ({ page }: PageProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <FooterIcons>
        <Home
          $currentpage={page === "home"}
          fontSize="large"
          onClick={() => {
            goToFeed(navigate);
          }}
        />
        <Cart
          $currentpage={page === "cart"}
          fontSize="large"
          onClick={() => {
            goToCart(navigate);
          }}
        />
        <Profile
          $currentpage={page === "profile"}
          fontSize="large"
          onClick={() => {
            goToProfile(navigate);
          }}
        />
      </FooterIcons>
      <MenuContainerSpace />
    </Container>
  );
};

export default NavBar;
