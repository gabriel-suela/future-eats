import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem 0;
  display: flex;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  align-items: center;

  img {
    width: 96px;
    height: 112px;
    margin: 0 16px 0 0;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 1rem;
    color: #5cb646;
    font-weight: normal;
  }
`;

export const BoxInform = styled.div`
  width: 100%;
  margin-top: 20px;

  p {
    font-size: 12px;
    color: grey;
    margin: 8px 0;
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
  justify-content: space-between;
  margin-top: 12px;
  h4 {
    font-weight: normal;
  }

  button {
    background: transparent;
    border: 1px solid black;
    font-size: 12px;
    border-color: #5cb646;
    border-radius: 8px 0px;
    width: 90px;
    height: 31px;
    margin: 7px 0 0 8px;
    padding: 8px 20.5px 9px 21.5px;
  }
`;

export const ButtonInfo = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 8px 0 8px 0;
  background-color: white;
  outline: none;
  border: 1px black solid;
`;
