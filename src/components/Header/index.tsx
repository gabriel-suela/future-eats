import { ChevronLeftIcon } from "@chakra-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../../routes/coordinator";
import { Container, Title } from "./style";

interface HeaderProps {
  title?: string;
  visibleArrow: boolean;
}

const Header = ({ title, visibleArrow }: HeaderProps) => {
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
    </Container>
  );
};

export default Header;
