import styled from "styled-components";

export const ContainerCardProduct = styled.div`
  margin: 0.5rem 0;
  display: flex;
  border: 1px solid grey;
  border-radius: 8px;
  height: 7rem;
`;
export const ProductImage = styled.img`
  width: 96px;
  height: 7rem;
  margin-right: 16px;
  border-radius: 8px 0 0 8px;
  object-fit: cover;
`;

export const BoxInform = styled.div`
    width: 100%;

    p{
      font-size: 12px;
      color: grey;
      margin: 8px 0;
      font-family: Roboto;
      
    }
`;

export const BoxNameQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1 px solid red;
  width: 2.063rem;
  height: 2.063rem;
`;
export const ProductQuantity = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  padding: 1rem 0 ;
`;
export const ProductName = styled.h3`
  font-family: Roboto;
  font-size: 1rem;
  color: #5cb646;
  margin-top: 16px;
`;

export const PriceInfo = styled.p``;
export const ButtonInfo = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 8px 0 8px 0;
  background-color: white;
  outline: none;
  border: 1px black solid;
`;
