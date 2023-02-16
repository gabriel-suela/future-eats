import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Cart, FooterContainer, FooterIcons, Home, MenuContainerSpace, Profile } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToCart, goToFeed, goToLogin, goToProfile } from "../../routes/coordinator";

const Footer = ({page}) => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterIcons>
        <Home
          currentPage={page === "home"}
          fontSize="large"
          onClick={() => {
            goToFeed(navigate);
          }}
        />
        <Cart
          currentPage={page === "cart"}
          fontSize="large"
          onClick={() => {
            goToCart(navigate);
          }}
        />
        <Profile
          currentPage={page === "profile"}
          fontSize="large"
          onClick={() => {
            goToProfile(navigate);
          }}
        />
      </FooterIcons>
      <MenuContainerSpace/>
      </FooterContainer>
  );
};

export default Footer;
