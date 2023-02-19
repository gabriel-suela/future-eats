import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

export const Container = styled.div`
 
  
`;

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
`;

export const MenuContainerSpace = styled.div `
  height: 3.062rem;
`
export const Profile = styled(PersonIcon)`
  && {
    color: ${(p) => p.currentpage ? "var(--mid-green);" : ""}
  }
`
export const Cart = styled(ShoppingCartIcon)`
  && {
    color: ${(p) => p.currentpage ? "var(--mid-green);" : ""}
  }
`
export const Home = styled(HomeIcon)`
  && {
    color: ${(p) => p.currentpage ? "var(--mid-green);" : ""}
  }
`
