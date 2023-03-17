import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

interface PgProps {
  $currentpage?: boolean;
}

export const Container = styled.div``;

export const FooterIcons = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 3.062rem;
  color: lightgray;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1),
    0 -2px 1px -1px rgba(0, 0, 0, 0.01), 0 -1px 1px 0 rgba(0, 0, 0, 0.1);
`;

export const MenuContainerSpace = styled.div`
  height: 3.062rem;
`;
export const Profile = styled(IoPersonOutline)<PgProps>`
  && {
    font-size: 2rem;
    color: ${(p) => (p.$currentpage ? "var(--mid-green);" : "")};
  }
`;
export const Cart = styled(BsCart)<PgProps>`
  && {
    color: ${(p) => (p.$currentpage ? "var(--mid-green);" : "")};

    font-size: 2rem;
  }
`;
export const Home = styled(GoHome)<PgProps>`
  && {
    font-size: 2rem;
    color: ${(p) => (p.$currentpage ? "var(--mid-green);" : "")};
  }
`;
