import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem 0;
  display: flex;
  border: 1px solid var(--greyish);
  border-radius: 8px;
  align-items: center;
  width: 100%;

  img {
    width: 96px;
    height: 112px;
    margin: 0 16px 0 0;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 1rem;
    color: var(--mid-green);
    font-weight: normal;
    margin-bottom: 10px;
    margin-top: 15px;
  }
`;

export const BoxInform = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    color: grey;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  span {
    font-weight: normal;
    font-size: 0.9rem;
    margin-top: 10px;
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
export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const AddToCartBtn = styled.button`
  background: transparent;
  border: 1px solid;
  font-size: 12px;
  border-color: var(--mid-green);
  border-radius: 8px 0px;
  width: 90px;
  height: 31px;
  margin: 13px 0 0 0;
`;

export const ButtonInfo = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 8px 0 8px 0;
  background-color: white;
  outline: none;
  border: 1px black solid;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: 1px solid black;
  font-size: 12px;
  border-color: red;
  border-radius: 8px 0px;
  width: 90px;
  height: 31px;
  margin: 15px 0 0 8px;
  padding: 8px 20px 9px 21.5px;
  color: red;
`;

export const Quantity = styled.div`
  width: 2rem;
  height: 2rem;
  color: red;
  margin-top: 10px;
  font-family: Roboto;
  font-weight: 500;
`;
