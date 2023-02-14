import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { FooterContainer, FooterIcons } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToCart, goToLogin, goToProfile } from "../../routes/coordinator";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterIcons>
        <HomeOutlinedIcon
          fontSize="large"
          onClick={() => {
            goToLogin(navigate);
          }}
        />
        <ShoppingCartOutlinedIcon
          fontSize="large"
          onClick={() => {
            goToCart(navigate);
          }}
        />
        <PersonOutlineOutlinedIcon
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
