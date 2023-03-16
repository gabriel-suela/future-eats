import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 2.75rem;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  justify-items: center;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 1rem;
  grid-column-start: 2;
`;
