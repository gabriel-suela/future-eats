import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../../routes/coordinator";
import { ArrowBack, ContainerHeader, Title } from "./styled";


const Header = ({ title }) => {

  const navigate = useNavigate()

  return (
    <>
    <ArrowBack onClick={()=>{goToLastPage(navigate)}}/>
    <ContainerHeader>
      <Title>{title}</Title>
    </ContainerHeader>
    </>
  );
};

export default Header;
