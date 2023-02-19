import styled from "styled-components";

export const BoxModal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 0 1rem;
  margin: 60% 1rem 50% 1rem;
`;

export const TitleModal = styled.p`
  margin: 1rem 0;
  text-align: center;
`;

export const QuantitySelect = styled.select`
  padding: 1rem;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  margin: 1rem 0;
`;

export const AddToCartBtn = styled.button`
  font-size: 1rem;
  font-weight: normal;
  text-align: right;
  color: #5cb646;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  margin: 1rem 0;
  align-self: flex-end;
  outline: 0;
  border: 0;
`;
