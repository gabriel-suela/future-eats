import { ArrowBackIosNew } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../../routes/coordinator";
import { ContainerHeader, Title } from "./styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <ArrowBackIosIcon
        onClick={() => {
          goToLastPage(navigate);
        }}
      />
      <Title>{title}</Title>
    </ContainerHeader>
  );
};

export default Header;
