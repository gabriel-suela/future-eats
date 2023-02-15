import React from "react";
import { ContainerHeader, Title } from "./styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <Title>{title}</Title>
    </ContainerHeader>
  );
};

export default Header;
