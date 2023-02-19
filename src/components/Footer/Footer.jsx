import React from "react";
import { Cart, Container, FooterIcons, Home, MenuContainerSpace, Profile } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToCart, goToFeed, goToLogin, goToProfile } from "../../routes/coordinator";

const Footer = ({page}) => {
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
      <MenuContainerSpace/>
      </Container>
  );
};

export default Footer;
