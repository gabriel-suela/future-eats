import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { FooterContainer, FooterIcons } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToCart, goToLogin, goToProfile } from "../../routes/coordinator";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterIcons>
        <HomeIcon
          fontSize="large"
          onClick={() => {
            goToLogin(navigate);
          }}
        />
        <ShoppingCartIcon
          fontSize="large"
          onClick={() => {
            goToCart(navigate);
          }}
        />
        <PersonIcon
          fontSize="large"
          onClick={() => {
            goToProfile(navigate);
          }}
        />
      </FooterIcons>
    </FooterContainer>
  );
};

export default Footer;
