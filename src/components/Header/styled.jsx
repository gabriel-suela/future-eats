import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: normal;
  font-size: 1rem;
`;

export const ArrowBack = styled(ArrowBackIosNewIcon)`
  && {
    width: 20px;
    position: relative;
    top: 35px;
    left: 20px;
  }
`;
